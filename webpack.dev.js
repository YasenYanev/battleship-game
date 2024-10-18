const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [new BundleAnalyzerPlugin()],
});