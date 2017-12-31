module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true,
    browser: true
  },

  extends: ['./rules/defaults']
};