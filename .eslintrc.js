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
    jest: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["import", "prettier"],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-interface": "off",
    "import/default": "off",
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          ["internal", "unknown"],
          ["parent", "sibling", "index"]
        ],
        "newlines-between": "always-and-inside-groups"
      }
    ],
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
