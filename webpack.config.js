const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        static: './dist'
    },
    resolve: {
        alias: {
            wasm: path.resolve(__dirname, 'wasm/pkg/index.js')
        },
    },
    output: {
        filename: 'main.js',
        path: path.resolve('dist')
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
    plugins: [new HtmlWebpackPlugin({
        title: "webpack-tauri-wasm",
        template: 'index.html'
    }),
    new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, 'wasm'),
        outDir: path.resolve(__dirname, 'wasm', 'pkg'),
    }), new VueLoaderPlugin(),],
    experiments: {
        asyncWebAssembly: true,
        syncWebAssembly: true,
    }
}