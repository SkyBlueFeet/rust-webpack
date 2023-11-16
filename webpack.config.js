const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const sfc = require('@vue/compiler-sfc')
const { VueLoaderPlugin } = require('vue-loader')

const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",
  entry: {
    index: "./js/index.js"
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: {
    contentBase: dist,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'assets/img/[hash][ext]'
      //   }
      // }
    ]
  },
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, "static")
    ]),

    new VueLoaderPlugin(),
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ]
};
