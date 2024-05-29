const json = require('eslint-plugin-json');

module.exports = [
  {
    files: ['**/*.json'],
    plugins: { json },
    processor: json.processors['.json'],
    rules: json.configs.recommended.rules,
  },
]
