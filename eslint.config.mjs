import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import eslintImport from "eslint-plugin-import";
import eslintJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPrettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["node_modules", "dist/", "lib/", "tmp/", ".lintstagedrc.js"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2015, // ES6
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: eslintImport,
      jsxA11y: eslintJsxA11y,
      prettier: eslintPrettier,
    },
    rules: {
      // TypeScript Rules
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],

      // General ESLint Rules
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "no-console": [
        "warn",
        {
          allow: ["warn", "error", "log", "time", "timeEnd", "timeLog"],
        },
      ],

      // Prettier Integration
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "all",
          printWidth: 80,
          semi: true,
        },
      ],
    },
  },
];
