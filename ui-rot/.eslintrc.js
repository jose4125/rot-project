module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    extends: [
      'prettier',
      'prettier/react',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'plugin:jsx-a11y/recommended'
    ],
      plugins: ['react',  'react-hooks', "jsx-a11y"],
    // add your custom rules here
    rules: {
        'react/prop-types': 1,
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
            singleQuote: true
          },
        ],
    }
  }
