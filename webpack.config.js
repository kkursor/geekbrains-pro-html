const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { StyleLoaderPlugin } = require("style-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => ({
    mode: env.prod ? "production" : "development",
    devtool: "source-map",
    entry: [
        //require.resolve(`webpack-dev-server/client`),
        path.resolve(__dirname, "./src/index.js")
    ].filter(Boolean),
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/"
    },
    resolve: {
        alias: {
            // this isn't technically needed, since the default `vue` entry for bundlers
            // is a simple `export * from '@vue/runtime-dom`. However having this
            // extra re-export somehow causes webpack to always invalidate the module
            // on the first HMR update and causes the page to reload.
            // vue: "@vue/runtime-dom"
            vue$: 'vue/dist/vue.esm.js',
            //'Vue': 'vue/dist/vue.esm-bundler.js',
            '@': path.resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: { limit: 8192 }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    /*devServer: {
        inline: true,
        hot: true,
        stats: "minimal",
        contentBase: __dirname,
        overlay: true,
        injectClient: false,
        disableHostCheck: true
    }*/
});
