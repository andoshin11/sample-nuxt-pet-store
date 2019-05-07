module.exports = {
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }], 'babel-preset-vue'],
      plugins: ['@babel/plugin-transform-typescript', 'require-context-hook', '@babel/plugin-proposal-class-properties']
    }
  }
}
