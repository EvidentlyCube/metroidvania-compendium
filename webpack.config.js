const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './frontend',
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/',
		filename: '[name].[contenthash].js',
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		overlay: true,
		historyApiFallback: true,
	},
	resolve: {
		modules: ['frontend', 'node_modules'],
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
            {
                test: /\.(png|svg|jpg|gif|fnt|glsl)$/,
                loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
            }
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: `${__dirname}/frontend/index.html`,
		}),
		new MiniCssExtractPlugin(),
	],
};
