import { eslintPlugin } from "esbuild-plugin-eslinter";
import { esbuildTsChecker } from "esbuild-plugin-ts-checker";
import { BuildOptions } from "esbuild";
import { cwd } from "process";
import { resolve } from "path";

const rootDir: string = cwd();
const options: BuildOptions = {
  bundle: true,
  charset: "utf8",
  chunkNames: "[name]-[hash]",
  entryNames: "bundle",
  entryPoints: [resolve(rootDir, "src/index.tsx")],
  format: "esm",
  incremental: true,
  plugins: [
    eslintPlugin({
      persistLintIssues: false,
    }),
    esbuildTsChecker({
      enableBuild: false,
      failOnError: true,
      tsconfig: resolve(rootDir, "tsconfig.json"),
    }),
  ],
  preserveSymlinks: true,
  resolveExtensions: [".js", ".ts", ".tsx"],
  splitting: true,
  treeShaking: true,
};

export { options };
