module.exports = {
  extends: [
    'eslint:recommended'
  ],
  env: {
    "browser": true
  },
  plugins: [],
  rules: {
    "semi": 1,
    "no-extra-semi": 2,
    "quotes": [1, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    'no-console': 'off',
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }]
  }
};
