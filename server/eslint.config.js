const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  prettier,
  { languageOptions: { sourceType: 'commonjs', globals: globals.node } },
];
