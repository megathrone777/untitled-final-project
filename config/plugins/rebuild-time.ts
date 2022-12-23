import { BuildResult, PluginBuild, Plugin } from "esbuild";

const rebuildTime: Plugin = {
  name: "rebuild-time",
  setup(build: PluginBuild): void {
    build.onStart((): void => {
      console.time("Build time");
      console.info("\x1b[32m%s\x1b[0m", "Compiling...");
    });

    build.onEnd((result: BuildResult): void => {
      if (result.errors && !!result.errors.length) {
        console.error("Build failed!", result.errors);

        return;
      }

      if (result.warnings && !!result.warnings.length) {
        console.error("Build completed with warnings:", result.warnings);
        console.timeEnd("Build time");

        return;
      }

      console.timeEnd("Build time");
      console.info("\x1b[32m%s\x1b[0m", "Compiled successfully!");
    });
  },
};

export { rebuildTime };
