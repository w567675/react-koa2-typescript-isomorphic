import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export default {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {

				}
			},
			{
				test: /\.css$/,
				 use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                },]
			},
			{
				test: /\.(jpeg|jpg|png|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 10240,
				},
			},

		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	plugins: [
		
		// new MiniCssExtractPlugin({
		// 	filename: "[name].[chunkhash].css",
		// 	chunkFilename: "[id].[chunkhash].css"
		// }),
		
		// webpackisomorphicToolsPlugin.development(),
		// assetsPluginInstance,
	],
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js',
		path: path.resolve(process.cwd(), 'dist'),
		publicPath: '/',
	},
	devtool: 'cheap-module-eval-source-map',
	mode: 'development'
}