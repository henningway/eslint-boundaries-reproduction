import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";
import ts from "typescript-eslint";

export default ts.config({
  files: ["src/**/*.{js,ts,vue}"],
  extends: [boundaries, js.configs.recommended, ...ts.configs.recommended],
  languageOptions: {},
  settings: { "boundaries/elements": [] },
  rules: { ...boundaries.configs.recommended.rules },
});