const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "production",
	entry: './frontend',

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		overlay: true
	},
	resolve: {
		modules: ['frontend', 'node_modules'],
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", '.js']
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: `${__dirname}/frontend/index.html`,
		})
	]
};