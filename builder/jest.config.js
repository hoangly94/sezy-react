module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx|jsx)'],
  // setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/features/(.*)$': '<rootDir>/src/features/$1',
    '^@/partials/(.*)$': '<rootDir>/src/partials/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@/guards/(.*)$': '<rootDir>/src/guards/$1',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/models/(.*)$': '<rootDir>/src/models/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./config/jest.setup.js'],
  debug: true,
}
