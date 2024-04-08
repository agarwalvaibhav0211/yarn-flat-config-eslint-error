// import sortKeysFix from "eslint-plugin-sort-keys-fix"
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});
const plugin=compat.plugins("eslint-plugin-sort-keys-fix")[0]

export default [
  {
    plugins: plugin.plugins,
    rules: {
      "no-var": [
        "error",
      ],
      "sort-keys-fix/sort-keys-fix": [
          "error",
          "asc",
          {
              "caseSensitive": true,
              "natural": true,
          },
      ],
    }
  },
]
