module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '[^/]vue$': 'vue/dist/vue.esm.js'
  },
  collectCoverage: true,
  collectCoverageFrom: ['app/utils/*.ts', 'app/utils/**/*.ts', 'app/usecases/**/*.ts', 'app/repositories/*.ts'],
  coverageDirectory: './coverage/',
  verbose: true,
  testMatch: ['<rootDir>/test/unit/**/*.ts'],
  transformIgnorePatterns: ['./node_modules/(?!vue)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
