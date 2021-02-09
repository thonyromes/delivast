module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'flowtype'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'global-require': [0],
    'no-underscore-dangle': [0],
    'react/forbid-prop-types': [0],
    'react/require-default-props': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: '17.0.1',
      flowVersion: '0.144.0',
    },
    'import/resolver': {
      alias: {
        map: [
          ['api', './src/api'],
          ['assets', './src/assets'],
          ['components', './src/components'],
          ['constants', './src/constants'],
          ['router', './src/router'],
          ['view', './src/view'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
