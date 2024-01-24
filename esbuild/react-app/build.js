const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/index.jsx"],
    bundle: true,
    outfile: "./public/build.js",
    publicPath: "./public",
  })
  .catch(() => process.exit(1));
