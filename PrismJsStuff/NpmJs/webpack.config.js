// This library allows us to combine paths easily
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, '../wwwroot/js'),
		filename: 'npmjs.bundle.js'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '../css/npmjs.bundle.css'
		})
	],
	mode: 'production',
	performance: {
		hints: false
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			},
			{
			test: /\.css$/,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				{ loader: 'css-loader' }
			],
			}
		]
	}
};