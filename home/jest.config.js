module.exports = {
    testEnvironment: 'node',
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testMatch: ['**/src/**/*.spec.ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  };