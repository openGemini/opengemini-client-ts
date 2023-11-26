import path from "node:path";

import typescript from "@rollup/plugin-typescript";
import type { RollupOptions } from "rollup";

const output = path.resolve(__dirname, "lib");

const config: RollupOptions = {
  input: "src/index.ts",
  output: [
    {
      name: /** TODO: Browser environment global variable name */ "OpengeminiClient",
      file: `${output}/index.js`,
      format: "umd",
    },
    {
      file: `${output}/index.cjs`,
      format: "cjs",
    },
    {
      file: `${output}/index.mjs`,
      format: "es",
    },
  ],
  plugins: [typescript()],
};

export default config;
