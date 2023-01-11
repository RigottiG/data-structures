module.exports = {
  rootDir: '/Users/guilhermerigotti/Documents/Projects/personal/data-structures',
  roots: ['<rootDir>'],
  cache: true,
  verbose: true,
  cacheDirectory: '<rootDir>/tmp/jest',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  testMatch: ['**/__tests__/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/tmp/', '/coverage/', '/stories/', '/\\.storybook/'],
  watchPathIgnorePatterns: ['/node_modules/'],
  automock: false,
  unmockedModulePathPatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '\\.json$', '/__tests__/', '/stories/', '/\\.storybook/'],
  globals: {
    'ts-jest': {
      tsconfig: '/Users/guilhermerigotti/Documents/Projects/personal/data-structures/tsconfig.json',
      diagnostics: false,
      isolatedModules: true,
    },
  },
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es|antd|[^/]+/es|rc-animate|rc-util)/).*'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '/node_modules/((lodash-es|[^/]+/es)|rc-animate|rc-util)/.*': 'ts-jest',
  },
  preset: 'ts-jest',
};
