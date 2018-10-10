const path = require('path');

module.exports = {
	mode: 'none',
	entry: './src/assets/ts/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'public/assets'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
};
