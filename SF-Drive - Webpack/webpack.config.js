const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    plugins: [ 
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin( options= {
            template: "./index.pug",
            filename: "main.html",
            template: "./faq.pug",
            filename: "faq.html"
        })
    ],
    optimization: {
        minimizer: true,
        minimizer: [
            new TerserWebpackPlugin(), 
            new OptimizeCssAssetsWebpackPlugin()
        ],
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
                test: /\.css$/
            },
            {
				test: /\.pug$/,
				loader: 'pug-loader'
				// options: {
				// pretty: true
                // }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    }
}