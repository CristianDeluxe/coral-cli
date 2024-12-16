import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import eslintImport from "eslint-plugin-import";
import eslintJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPrettier from "eslint-plugin-prettier";
import oclifConfig from "eslint-config-oclif";
import oclifTSConfig from "eslint-config-oclif-typescript";
import prettierConfig from "eslint-config-prettier";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import perfectionist from "eslint-plugin-perfectionist";
import jsdoc from "eslint-plugin-jsdoc";

export default [
  {
    ignores: ["node_modules", "dist/", "lib/", "tmp/", ".lintstagedrc.js"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  jsdoc.configs["flat/recommended"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest", // ES2022
        sourceType: "module",
        project: "./tsconfig.json", // Align with TypeScript config
        module: "node16",
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
      unicorn: eslintPluginUnicorn,
      perfectionist,
      jsdoc,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // Add rules from oclif-typescript and oclif
      ...oclifConfig.rules,
      ...oclifTSConfig.rules,

      // Remove valid-jsdoc rules (deprecated) and add new ones (jsdoc)
      "valid-jsdoc": "off",
      "jsdoc/require-param": [
        "warn",
        {
          enableFixer: true,
          checkDestructured: false,
          checkRestProperty: false,
        },
      ],
      "jsdoc/require-returns": [
        "warn",
        {
          enableFixer: true,
          checkConstructors: false,
        },
      ],
      "jsdoc/check-param-names": "warn",
      "jsdoc/require-description": "warn",

      // Other rules
      ...prettierConfig.rules,
      "perfectionist/sort-imports": "error",

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
          bracketSpacing: true,
        },
      ],
    },
  },
];
