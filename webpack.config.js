const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        editor: './src/editor.js',
    },
    output: {
        path: Path.join(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        contentBase: Path.join(__dirname, 'dist'),
        port: 2333
    },
    module: {
        rules: [
            {
                test: /.+\.jsx?/,
                loader: 'babel-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename:'editor.html',
            chunks: ['editor'],
        }),
    ],
};
