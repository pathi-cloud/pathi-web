import globals from "globals"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import reactlint from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import prettier from "eslint-plugin-prettier/recommended"

export default tseslint.config(
  { ignores: ["dist"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...reactlint.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactHooks.configs["recommended-latest"],
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off",
    },
  },
  prettier
)
