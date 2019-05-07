module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts', 'tsx', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(js|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/.jest/babel-vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/../app/$1',
    '^~/(.*)$': '<rootDir>/../app/$1',
    '@storybook/(.*)$': '<rootDir>/node_modules/@storybook/$1',
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.runtime.common.js'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/test/snapshot/*.js'],
  verbose: true,
  setupFiles: ['./.jest/register-context.js']
}
