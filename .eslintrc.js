module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  plugins: ['jest'],
  extends: ['standard', 'plugin:prettier/recommended', 'plugin:jest/recommended', 'plugin:jest/style', 'airbnb',],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
}
