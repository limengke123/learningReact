'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        resolve:{
            extensions:['','.js','.json']
        },
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:['react','es2015','stage-0'],
                        plugins:[["import",{
                            libraryName:"antd",
                            style:true,
                        }]]
                    }
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192',
            }
        ]
    }
};
