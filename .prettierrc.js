module.exports = {
  printWidth: 80,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  endOfLine: 'auto',
  bracketSpacing: true,
  overrides: [
    {
      files: ['**/packages/*/src/**/*.js', '**/packages/*/test/**/*.js'],
      options: {
        parser: 'babel',
        trailingComma: 'all',
      },
    },
  ],
}
