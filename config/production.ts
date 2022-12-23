import { BuildOptions, BuildResult, build } from "esbuild";
import { clean } from "esbuild-plugin-clean";
import { copy } from "esbuild-plugin-copy";
import { cwd } from "process";
import { resolve } from "path";

import { options } from "./options";

const rootDir: string = cwd();
const buildDir: string = resolve(rootDir, "build");
const productionOptions: BuildOptions = {
  ...options,
  legalComments: "none",
  drop: ["console"],
  minify: true,
  outdir: `${buildDir}/js`,
  plugins: [
    ...options.plugins!,
    clean({
      cleanOn: "start",
      patterns: ["build", "public/js"],
      sync: false,
      verbose: false,
    }),
    copy({
      assets: [
        {
          from: "./public/**/*",
          to: buildDir,
        },
      ],
    }),
  ],
};

(async (): Promise<void> => {
  console.info("\x1b[32m%s\x1b[0m", "Compiling...");
  await build(productionOptions)
    .then((result: BuildResult): void => {
      if (result && !!result.errors.length) {
        console.error(result.errors);

        return;
      }

      console.info("\x1b[32m%s\x1b[0m", "Compiled successfully!");
      process.exit(0);
    })
    .catch((): void => {
      console.error("Build failed!");
      process.exit(1);
    });
})();
