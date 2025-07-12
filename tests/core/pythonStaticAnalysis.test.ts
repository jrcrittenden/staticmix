import { describe, expect, test, vi } from 'vitest';
import { runPythonStaticAnalysis } from '../../src/core/pythonStaticAnalysis.js';

vi.mock('node:child_process', () => ({
  execFile: vi.fn(),
}));

const execFileAsync = vi.fn();

describe('runPythonStaticAnalysis', () => {
  test('parses pyflakes output', async () => {
    execFileAsync.mockResolvedValue({ stdout: 'a.py:1: unused import os\nb.py:2: undefined name x\n' });
    const summary = await runPythonStaticAnalysis(['a.py', 'b.py'], vi.fn(), { execFileAsync });
    expect(execFileAsync).toHaveBeenCalledWith('pyflakes', ['a.py', 'b.py']);
    expect(summary).toEqual([
      { file: 'a.py', messages: ['unused import os'] },
      { file: 'b.py', messages: ['undefined name x'] },
    ]);
  });

  test('returns empty array on failure', async () => {
    execFileAsync.mockRejectedValue(new Error('fail'));
    const summary = await runPythonStaticAnalysis(['a.py'], vi.fn(), { execFileAsync });
    expect(summary).toEqual([]);
  });
});
