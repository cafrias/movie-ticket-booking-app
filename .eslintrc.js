module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      "./tsconfig.json",
      "./tsconfig.node.json",
      "./cypress/tsconfig.json",
    ],
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  ignorePatterns: ["public/**/*.*"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: [".ts"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
    {
      files: ["src/**/*.test.{ts,tsx}", "cypress/**/*.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-call": ["off"],
        "@typescript-eslint/no-unsafe-member-access": ["off"],
        "import/no-extraneous-dependencies": ["off"],
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json", // or wherever your tsconfig is located
  },
  rules: {
    "react/require-default-props": ["off"],
  },
};
