import type { Config } from "jest"
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  dir: "./",
})

const config: Config = {
  displayName: "portfolio-website",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],

  // Coverage configuration
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!app/layout.tsx", // Layout has minimal testable logic
    "!components/ui/**", // shadcn/ui components are third-party
    "!components/theme-provider.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ["text", "text-summary", "lcov", "clover"],
  coverageDirectory: "coverage",

  // Module mapping
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/fileMock.ts",
  },

  // Test patterns
  testMatch: ["<rootDir>/__tests__/**/*.test.{ts,tsx}", "<rootDir>/**/*.test.{ts,tsx}"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/", "<rootDir>/amplify/"],
}

export default createJestConfig(config)
