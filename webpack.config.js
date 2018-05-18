const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['env', 'react'],
				plugins: ['syntax-dynamic-import', 'react-hot-loader/babel']
			}
		}, {
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
			]
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx', ],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test',
			template: 'src/template/index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	optimization: {
		runtimeChunk: {
			name: "manifest"
		},
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					priority: -20,
					chunks: "all"
				}
			}
		}
	},
	entry: {
		index: './src/client/index.jsx',
	},
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: "[name].[chunkhash].js",
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development'
}