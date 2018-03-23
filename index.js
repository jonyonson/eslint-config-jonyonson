module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    './rules/errors.js',
    './rules/best-practices.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/imports.js',
  ],

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  rules: {},
};
