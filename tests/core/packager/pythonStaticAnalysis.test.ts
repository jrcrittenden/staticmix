import { describe, expect, test, vi } from 'vitest';
import { pack } from '../../../src/core/packager.js';
import { createMockConfig } from '../../testing/testUtils.js';
vi.mock('../../../src/core/pythonStaticAnalysis.js');

const createDeps = () => ({
  searchFiles: vi.fn().mockResolvedValue({ filePaths: ['main.py'], emptyDirPaths: [] }),
  sortPaths: vi.fn().mockImplementation((p) => p),
  collectFiles: vi.fn().mockResolvedValue([{ path: 'main.py', content: 'print(1)' }]),
  processFiles: vi.fn().mockReturnValue([{ path: 'main.py', content: 'print(1)' }]),
  validateFileSafety: vi.fn().mockResolvedValue({
    safeFilePaths: ['main.py'],
    safeRawFiles: [{ path: 'main.py', content: 'print(1)' }],
    suspiciousFilesResults: [],
    suspiciousGitDiffResults: [],
  }),
  generateOutput: vi.fn().mockResolvedValue('out'),
  handleOutput: vi.fn(),
  copyToClipboardIfEnabled: vi.fn(),
  calculateMetrics: vi.fn().mockResolvedValue({
    totalFiles: 1,
    totalCharacters: 7,
    totalTokens: 2,
    fileCharCounts: { 'main.py': 7 },
    fileTokenCounts: { 'main.py': 2 },
    gitDiffTokenCount: 0,
  }),
  getGitDiffs: vi.fn().mockResolvedValue(undefined),
  runPythonStaticAnalysis: vi.fn().mockResolvedValue([{ file: 'main.py', messages: ['unused import'] }]),
});

describe('packager python static analysis', () => {
  test('runs analysis when enabled', async () => {
    const config = createMockConfig({ pythonStaticAnalysis: true });
    const deps = createDeps();
    const result = await pack(['root'], config, vi.fn(), deps);
    expect(deps.runPythonStaticAnalysis).toHaveBeenCalledWith(['main.py'], expect.any(Function));
    expect(result.pythonAnalysisSummary).toEqual([{ file: 'main.py', messages: ['unused import'] }]);
  });

  test('skips analysis when disabled', async () => {
    const config = createMockConfig({ pythonStaticAnalysis: false });
    const deps = createDeps();
    await pack(['root'], config, vi.fn(), deps);
    expect(deps.runPythonStaticAnalysis).not.toHaveBeenCalled();
  });
});
