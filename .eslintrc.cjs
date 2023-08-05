module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  "rules": {
    "no-var": "error",
    "indent": [
        "error",
        4
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "linebreak-style": [
        "off"
    ],
    "quotes": [
        "error",
        "double"
    ],
    "semi": "off",
    "@typescript-eslint/semi": [
        "error"
    ],
    "semi-spacing": [
        "error",
        {
            "before": false,
            "after": true
        }
    ],
    "react/react-in-jsx-scope": "off"
}
}
