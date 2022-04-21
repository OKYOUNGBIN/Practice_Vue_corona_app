// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/vue-corona-app" : "/",
//   outputDir: "./docs",
// };
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/vue-corona-app/",
  outputDir: "./docs",
});
