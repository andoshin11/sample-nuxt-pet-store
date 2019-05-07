const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = (baseConfig, env, config) => {
  config.resolve.alias['@storybook/vue$'] = path.resolve(__dirname, '../node_modules/@storybook/vue')

  config.resolve.extensions.push('.tsx')
  config.resolve.extensions.push('.ts')
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: ['\\.vue$']
        }
      }
    ],
    exclude: /node_modules/
  })
  config.resolve.alias['@'] = path.resolve(__dirname, '../../app')
  config.resolve.alias['~'] = path.resolve(__dirname, '../../app')

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      workers: 2,
      vue: true
    })
  )
  config.plugins.push(new HardSourceWebpackPlugin())

  return config
}
