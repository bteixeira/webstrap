const path = require('path');

module.exports = {
	mode: 'none',
	entry: './src/assets/ts/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'awesome-typescript-loader',
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
};
