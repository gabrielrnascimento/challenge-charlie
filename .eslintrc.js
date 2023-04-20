module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: [ '@typescript-eslint', 'react', 'react-hooks', 'jest', 'prettier', 'newline-destructuring' ],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      'typescript': {}
    },
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: [ '*.ts', '*.mts', '*.cts', '*.tsx' ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
  ],
  rules: {
    // "prettier/prettier": ["error"],
    'quotes': [ 'error', 'single', { 'avoidEscape': true } ],
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': [ 1, { extensions: [ '.tsx' ] } ],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [ 'error', { allowArgumentsExplicitlyTypedAsAny: true } ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/semi': [ 'error', 'always' ],
    '@typescript-eslint/indent': [ 'error', 2 ],
    '@typescript-eslint/consistent-type-imports': [ 'error', { fixStyle: 'inline-type-imports' } ],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/method-signature-style': [ 'error' ],
    // "@typescript-eslint/consistent-type-definitions": [ "error", "type" ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // "react/jsx-props-no-spreading": "off",
    'react/jsx-one-expression-per-line': [ 'error', { 'allow': 'single-child' } ],
    'react/jsx-curly-newline': [ 'error' ],
    'react-hooks/rules-of-hooks': 'error',
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', {
      'consistent': true,
      'multiline': true,
      'minProperties': 3
    } ],
    'newline-destructuring/newline': [ 'error' ],
    'object-property-newline': [ 'error', { 'allowAllPropertiesOnSameLine': true } ],
    // "react-hooks/exhaustive-deps": "warn",
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: [ '**/*.spec.ts', '**/*.spec.tsx' ] },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          [ 'sibling', 'parent' ],
          'index',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
};
