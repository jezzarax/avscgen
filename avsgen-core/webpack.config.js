// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const DeclarationBundlerPlugin = require('types-webpack-bundler');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DeclarationBundlerPlugin({
      moduleName: '"avsgen-core"',
      out: '@types/index.d.ts'
    }),
    new CopyWebpackPlugin({ patterns: [{
      from: './src/package.json',
      to: '../dist/package.json'
    }]})
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
