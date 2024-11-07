import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";

export default [
  js.configs.recommended,
  boundaries,
  {
    rules: { ...boundaries.configs.recommended.rules },
  },
];
