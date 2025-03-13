import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "src/**/integration-tests/**/**.itest.ts",
    baseUrl: "http://localhost:5173",
  },
})
