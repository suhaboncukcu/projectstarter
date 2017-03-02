var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//custom js
module.exports = {
  entry: {
  	"bundle": './app/index.js',
  	"vendor_bundle" : './app/vendor.js',
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
        rules: [
        	{
        		test: /\.css$/, 
        		use:   ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        	}
        ]
  },
  plugins: [
  		new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({   
	        jQuery: 'jquery',
	        $: 'jquery',
	        jquery: 'jquery'
	    }),
	    new HtmlWebpackPlugin(),
	    new webpack.LoaderOptionsPlugin({
	        minimize: true
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	        compress: {
	          warnings: false,
	          screw_ie8: true,
	          conditionals: true,
	          unused: true,
	          comparisons: true,
	          sequences: true,
	          dead_code: true,
	          evaluate: true,
	          if_return: true,
	          join_vars: true,
	        },
	        output: {
	          comments: false,
	        },
	    }),
    ]
};


