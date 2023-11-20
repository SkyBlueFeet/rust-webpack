const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const sfc = require('@vue/compiler-sfc')
const { VueLoaderPlugin } = require('vue-loader')
// const webpack = require('webpack')

const dist = path.resolve(__dirname, "dist");


/**
 * @type {any}
 */
module.exports = {
  mode: "production",
  entry: {
    index: "./view/index.js"
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: {
    contentBase: dist,
  },
  // experiments: {
  //   syncWebAssembly: true
  // },
  resolve: {
    alias: {
      wasm: path.resolve(__dirname, 'wasm/pkg/index.js')
    },
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
      crateDirectory: path.resolve(__dirname, 'wasm'),
      outDir: path.resolve(__dirname, 'wasm', 'pkg'),
    }),
  ]
};
