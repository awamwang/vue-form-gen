module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['eslint:recommended'],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },

  overrides: [
    {
      files: ['packages/{ui,preview}/**/*'],
      extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
      ],
      overrides: [
        {
          files: [
            'packages/**/tests/__tests__/*.{j,t}s?(x)',
            'packages/**/tests/unit/**/*.spec.{j,t}s?(x)',
          ],
          // env: {
          //   jest: true,
          // },
        },
      ],
    },
  ],
}
