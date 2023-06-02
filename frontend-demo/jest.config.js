export default {
    transform: {
        '^.+\\.[jt]sx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    globals: {
        'ts-jest': {
            diagnostics: false,
            isolatedModules: true
        },
    },
};