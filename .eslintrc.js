module.exports = {
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
  parser: "@typescript-eslint/parser",
  plugins: ["import", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-interface": "off",
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
    ],
    "prettier/prettier": "error",
    "react/prop-types": 0
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    }
  }
};
