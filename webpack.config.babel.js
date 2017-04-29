import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const babelLoaderConfig = {
    test: /\.js?$/,
    include: [
        path.resolve(__dirname, 'src/js'),
    ],
    exclude: /(node_modules)/,
    loader: 'babel',
};

const sassLoaderModule = {
    test: /\.scss$/,
    loaders: ["style", "css", "sass"]
};

const htmlLoader = {
    test: /\.html$/,
    loader: 'ngtemplate?relativeTo=' + __dirname + '/!html',
};

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/js/vendor'),
        main: path.resolve(__dirname, 'src/js/index')
    },
    target: 'web',
    resolve: {
        modulesDirectories: [
            'src/js',
            'node_modules'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new ExtractTextPlugin('[name].[contenthash].css'),

        new WebpackMd5Hash(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        // Create HTML file that includes a reference to bundledJS

        new HtmlWebpackPlugin({
            template: 'public/index.ejs',
            inject: true
        })
    ],
    module: {
        loaders: [
            babelLoaderConfig,
            sassLoaderModule,
            htmlLoader,
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader' }
        ]
    },
    sassLoader: {
		includePaths: [path.resolve(__dirname, "./node_modules/@imggaming/dde-ui-css-framework")]
	}
}
