import type { Options } from "tsup";

export default {
  bundle: true,
  dts: true,
  minify: true,
  format: "esm",
  clean: true,
  entry: ["src/index.ts"]
} as Options;
