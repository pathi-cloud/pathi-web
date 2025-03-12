import globals from "globals"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import reactlint from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import prettier from "eslint-plugin-prettier/recommended"
import importPlugin from "eslint-plugin-import"
import jestPlugin from "eslint-plugin-jest"

export default tseslint.config(
  { ignores: ["dist"] },
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  {
    ...reactlint.configs.flat.recommended,
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
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
  {
    files: ["__tests__/*"],
    ...jestPlugin.configs["flat/recommended"],
  },
  prettier
)
