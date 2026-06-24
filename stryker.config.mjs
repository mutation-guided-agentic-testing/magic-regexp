// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'pnpm',
  reporters: ['html', 'clear-text', 'progress', 'dashboard', 'json'],
  testRunner: 'vitest',
  coverageAnalysis: 'perTest',
  buildCommand: 'tsc --noEmit',
  plugins: [
    '@stryker-mutator/vitest-runner',
    '@stryker-mutator/typescript-checker',
  ],
  // Additions
  mutate: ['src/**/*.ts', '!src/**/*.d.ts'],
  testFiles: ['test/**/*.test.ts'],
  ignoreStatic: true,
  jsonReporter: {
    fileName: '../reports/magix-regexp/stryker-mutations.json',
  },
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
  incremental: true,
}
export default config
