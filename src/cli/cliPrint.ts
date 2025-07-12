import path from 'node:path';
import pc from 'picocolors';
import type { RepomixConfigMerged } from '../config/configSchema.js';
import type { PackResult } from '../core/packager.js';
import type { SuspiciousFileResult } from '../core/security/securityCheck.js';
import { logger } from '../shared/logger.js';

export const printSummary = (packResult: PackResult, config: RepomixConfigMerged) => {
  let securityCheckMessage = '';
  if (config.security.enableSecurityCheck) {
    if (packResult.suspiciousFilesResults.length > 0) {
      securityCheckMessage = pc.yellow(
        `${packResult.suspiciousFilesResults.length.toLocaleString()} suspicious file(s) detected and excluded`,
      );
    } else {
      securityCheckMessage = pc.white('✔ No suspicious files detected');
    }
  } else {
    securityCheckMessage = pc.dim('Security check disabled');
  }

  logger.log(pc.white('📊 Pack Summary:'));
  logger.log(pc.dim('────────────────'));
  logger.log(`${pc.white('  Total Files:')} ${pc.white(packResult.totalFiles.toLocaleString())} files`);
  logger.log(`${pc.white(' Total Tokens:')} ${pc.white(packResult.totalTokens.toLocaleString())} tokens`);
  logger.log(`${pc.white('  Total Chars:')} ${pc.white(packResult.totalCharacters.toLocaleString())} chars`);
  logger.log(`${pc.white('       Output:')} ${pc.white(config.output.filePath)}`);
  logger.log(`${pc.white('     Security:')} ${pc.white(securityCheckMessage)}`);

  if (config.output.git?.includeDiffs) {
    let gitDiffsMessage = '';
    if (packResult.gitDiffTokenCount) {
      gitDiffsMessage = pc.white(
        `✔ Git diffs included ${pc.dim(`(${packResult.gitDiffTokenCount.toLocaleString()} tokens)`)}`,
      );
    } else {
      gitDiffsMessage = pc.dim('✖ No git diffs included');
    }
    logger.log(`${pc.white('    Git Diffs:')} ${gitDiffsMessage}`);
  }

  if (packResult.pythonAnalysisSummary && packResult.pythonAnalysisSummary.length > 0) {
    logger.log(`${pc.white(' Python Lint:')}`);
    packResult.pythonAnalysisSummary.forEach((item) => {
      const count = item.messages.length;
      const issue = count === 1 ? 'issue' : 'issues';
      logger.log(pc.dim(`  - ${item.file}: ${count} ${issue}`));
    });
  }
};

export const printSecurityCheck = (
  rootDir: string,
  suspiciousFilesResults: SuspiciousFileResult[],
  suspiciousGitDiffResults: SuspiciousFileResult[],
  config: RepomixConfigMerged,
) => {
  if (!config.security.enableSecurityCheck) {
    return;
  }

  logger.log(pc.white('🔎 Security Check:'));
  logger.log(pc.dim('──────────────────'));

  // Print results for files
  if (suspiciousFilesResults.length === 0) {
    logger.log(`${pc.green('✔')} ${pc.white('No suspicious files detected.')}`);
  } else {
    logger.log(pc.yellow(`${suspiciousFilesResults.length} suspicious file(s) detected and excluded from the output:`));
    suspiciousFilesResults.forEach((suspiciousFilesResult, index) => {
      const relativeFilePath = path.relative(rootDir, suspiciousFilesResult.filePath);
      logger.log(`${pc.white(`${index + 1}.`)} ${pc.white(relativeFilePath)}`);
      const issueCount = suspiciousFilesResult.messages.length;
      const issueText = issueCount === 1 ? 'security issue' : 'security issues';
      logger.log(pc.dim(`   - ${issueCount} ${issueText} detected`));
    });
    logger.log(pc.yellow('\nThese files have been excluded from the output for security reasons.'));
    logger.log(pc.yellow('Please review these files for potential sensitive information.'));
  }

  // Print results for git diffs
  if (suspiciousGitDiffResults.length > 0) {
    logger.log('');
    logger.log(pc.yellow(`${suspiciousGitDiffResults.length} security issue(s) found in Git diffs:`));
    suspiciousGitDiffResults.forEach((suspiciousResult, index) => {
      logger.log(`${pc.white(`${index + 1}.`)} ${pc.white(suspiciousResult.filePath)}`);
      const issueCount = suspiciousResult.messages.length;
      const issueText = issueCount === 1 ? 'security issue' : 'security issues';
      logger.log(pc.dim(`   - ${issueCount} ${issueText} detected`));
    });
    logger.log(pc.yellow('\nNote: Git diffs with security issues are still included in the output.'));
    logger.log(pc.yellow('Please review the diffs before sharing the output.'));
  }
};

export const printTopFiles = (
  fileCharCounts: Record<string, number>,
  fileTokenCounts: Record<string, number>,
  topFilesLength: number,
  totalTokens: number,
) => {
  const topFilesLengthStrLen = topFilesLength.toString().length;
  logger.log(pc.white(`📈 Top ${topFilesLength} Files by Token Count:`));
  logger.log(pc.dim(`─────────────────────────────────────────────────${'─'.repeat(topFilesLengthStrLen)}`));

  // Filter files that have token counts (top candidates by char count)
  const filesWithTokenCounts = Object.entries(fileTokenCounts)
    .filter(([, tokenCount]) => tokenCount > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topFilesLength);

  // Use the actual total tokens from the entire output

  filesWithTokenCounts.forEach(([filePath, tokenCount], index) => {
    const charCount = fileCharCounts[filePath];
    const percentageOfTotal = totalTokens > 0 ? Number(((tokenCount / totalTokens) * 100).toFixed(1)) : 0;
    const indexString = `${index + 1}.`.padEnd(3, ' ');
    logger.log(
      `${pc.white(`${indexString}`)} ${pc.white(filePath)} ${pc.dim(`(${tokenCount.toLocaleString()} tokens, ${charCount.toLocaleString()} chars, ${percentageOfTotal}%)`)}`,
    );
  });
};

export const printCompletion = () => {
  logger.log(pc.green('🎉 All Done!'));
  logger.log(pc.white('Your repository has been successfully packed.'));

  logger.log('');
  logger.log(`💡 Repomix is now available in your browser! Try it at ${pc.underline('https://repomix.com')}`);
};
