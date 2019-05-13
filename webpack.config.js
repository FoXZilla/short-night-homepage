const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        'examples/polar-day': './src/examples/polar-day',
    },
    output: {
        path: Path.join(__dirname, 'dist'),
    },
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        port: 2333
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': Path.resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /.+\.jsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader'],
                include: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
                    publicPath: '/',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename:'examples/polar-day.html',
            chunks: ['examples/polar-day'],
        }),
    ],
};
