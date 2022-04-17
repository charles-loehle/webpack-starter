const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	plugins: [new MiniCssExtractPlugin()],
	entry: path.resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				// sass
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				// javascript
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env'], '@babel/preset-react'],
					},
				},
			},
			{
				// images
				test: /\.(png|svg|jpg|jpeg|gif)/i,
				type: 'asset/resource',
			},
		],
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	// folder used by webpack to serve the app to the browser
	devServer: {
		static: path.resolve(__dirname, './public'),
		hot: true,
		open: true,
	},
};
