const path = require('path');

module.exports = {
    entry: './app/core.js',
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
        clientLogLevel: 'error',
        open: { app: ['google-chrome'] },
        hot: true,
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
