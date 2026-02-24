import nextConfig from "eslint-config-next"

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "coverage/**", "amplify/**", "__mocks__/**", "components/ui/**"],
  },
  ...nextConfig,
  {
    rules: {
      // Code smell checks
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-var": "error",
      "prefer-const": "error",
      "no-nested-ternary": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      complexity: ["warn", 20],
      "max-depth": ["warn", 4],

      // Relax rules for existing codebase
      "react/no-unescaped-entities": "off",
      "no-duplicate-imports": "off",
    },
  },
]

export default eslintConfig
