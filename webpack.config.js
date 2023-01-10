const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], 
            },
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            /* {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            },*/
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                loader: 'url-loader',
                options: {
                  limit: 25000,
                },
                /*
                 test: /.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/, 
                 //loader: 'url-loader?limit=1024000' 
                 use: [

                 {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name : 'scr/img/[name].[ext]'
                    }
                }]*/
                //  test: /\.(png|svg|jpg|gif)$/,
                //  use: [
                //   'file-loader',
                //   ],
                //         options: {
                //              outputPath: 'scr/png' // Chage this like 'public/images' or any other relative path to the root
                //           }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
