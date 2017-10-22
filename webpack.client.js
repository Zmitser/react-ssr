const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base');


const config = {
    entry: './src//client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(base, config);
