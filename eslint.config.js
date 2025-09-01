const react = require('eslint-plugin-react');
const google = require('eslint-config-google');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
      },
    },
    plugins: {
      react: react,
    },
    rules: {
      ...google.rules,
      ...react.configs.recommended.rules,
      'max-len': ['error', {code: 100, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true}],
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'static/animation-iframes/**',
      'node_modules/**',
      '.cache/**',
      'public/**',
      '*.json',
      'src/templates/prism.js',
      'src/templates/prism.css',
    ],
  },
];
