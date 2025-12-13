import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    extends: [js.configs.recommended, pluginReact.configs.flat.recommended],
    settings: {
      react: {
        version: "detect", // auto-detect React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // not needed in React 17+
      "react/jsx-uses-react": "off", // not needed in React 17+
      "react-hooks/rules-of-hooks": "error", // enforce hooks rules
      "react-hooks/exhaustive-deps": "warn", // warn about missing deps
    },
  },
]);
