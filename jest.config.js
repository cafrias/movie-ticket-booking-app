/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,js,tsx,jsx}",
    "!<rootDir>/src/main.ts",
    "!<rootDir>/src/*.d.ts",
  ],
  coverageReporters: ["clover", "json", "lcov", "text", "cobertura"],
  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/config/CSSStub.js",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/config/CSSStub.js",
  },
};

module.exports = config;
