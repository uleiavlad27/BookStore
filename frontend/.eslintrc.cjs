module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,  // Add Node.js environment
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'node',  // Include Node.js plugin
  ],
  rules: {
    // Your custom rules here
  },
};
