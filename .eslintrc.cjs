/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    // "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "unicorn",
    "sort-keys-fix",
    "sort-destructure-keys",
    "typescript-custom-sort-keys",
  ],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "import/no-cycle": "warn",
    "import/no-duplicates": ["error"],
    "import/no-named-as-default": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
        ],
        "newlines-between": "always",
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    "react/sort-prop-types": [
      "warn",
      {
        callbacksLast: true,
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "tailwindcss/no-custom-classname": "off",
    "typescript-custom-sort-keys/interface": [
      "error",
      "asc",
      {
        caseSensitive: true,
        showFunctionsAtEnd: true,
      },
    ],
    "unicorn/filename-case": ["error", { case: "kebabCase" }],
  },
  settings: {
    tailwindcss: {
      callees: ["twMerge"],
      config: "./tailwind.config.ts",
      removeDuplicates: true,
    },
  },
};

module.exports = config;
