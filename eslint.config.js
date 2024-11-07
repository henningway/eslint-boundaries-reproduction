import boundaries from "eslint-plugin-boundaries";

export default [
  boundaries,
  { rules: { ...boundaries.configs.recommended.rules } }
];
