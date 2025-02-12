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
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(dirname, 'index.html'),
            filename: 'index.html',
        })
    ]
};
