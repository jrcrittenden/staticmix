import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { logger } from '../shared/logger.js';
import type { RepomixProgressCallback } from '../shared/types.js';

const execFileAsync = promisify(execFile);

export interface PythonAnalysisSummary {
  file: string;
  messages: string[];
}

export const runPythonStaticAnalysis = async (
  filePaths: string[],
  progressCallback: RepomixProgressCallback = () => {},
  deps = { execFileAsync },
): Promise<PythonAnalysisSummary[]> => {
  if (filePaths.length === 0) return [];

  progressCallback('Running Python static analysis...');

  try {
    const result = await deps.execFileAsync('pyflakes', filePaths);
    const output = result.stdout.trim();
    if (!output) return [];

    const summaries: Record<string, string[]> = {};
    for (const line of output.split('\n')) {
      const match = line.match(/^(.*?):\d+:\s*(.*)$/);
      if (match) {
        const [, file, message] = match;
        if (!summaries[file]) summaries[file] = [];
        summaries[file].push(message.trim());
      }
    }
    return Object.entries(summaries).map(([file, messages]) => ({ file, messages }));
  } catch (error) {
    logger.warn(`Python static analysis failed: ${(error as Error).message}`);
    return [];
  }
};
