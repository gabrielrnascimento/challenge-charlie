module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: [ 'node_modules', 'src' ],
  moduleNameMapper: {
    '\\.(css|scss)$':'identity-obj-proxy'
  },
  setupFilesAfterEnv: [ '<rootDir>/src/config/setup-jest.ts' ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      { tsconfig: 'tsconfig.json' }
    ]
  }
};