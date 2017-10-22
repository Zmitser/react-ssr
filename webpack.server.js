const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()]
};

module.exports = merge(base, config);