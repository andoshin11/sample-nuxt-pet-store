module.exports = {
  extends: ['./.eslintrc.ts.js', 'plugin:vue/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-self-closing': 'off'
  }
}
