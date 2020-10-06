module.exports = {
  projects: ['<rootDir>', '<rootDir>/packages/*/'],
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.{js,vue}', '!**/src/main.ts', '!**/src/**/*.d.ts'],
}
