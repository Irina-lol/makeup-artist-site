import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
export default {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(dirname, 'dist'),
        publicPath: '/',
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(dirname, 'index.html'),
            filename: 'index.html',
        }),
    ],
};
