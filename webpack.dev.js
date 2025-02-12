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
           
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(dirname, 'index.html'),
            filename: 'index.html',
        }),
    ],
};
