module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@strv/react",
    "@strv/react/optional",
    // '@strv/typescript',
    // '@strv/typescript/optional',
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index", "unknown"]
        ],
        "newlines-between": "always"
      }
    ]
  },
  plugins: ["prettier"]
};
