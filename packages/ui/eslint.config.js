import baseConfig from "@attestbox/eslint-config/base";
import reactConfig from "@attestbox/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
