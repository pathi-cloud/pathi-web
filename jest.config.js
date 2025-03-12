const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/__tests__/**/*.test.tsx"],
  setupFiles: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
  },
}

export default config
