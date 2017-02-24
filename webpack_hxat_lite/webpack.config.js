const path = require('path');
const webpack = require('webpack');
var glob = require("glob");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    static_folder: path.join(__dirname, '../http_static'),
    build: path.join(__dirname, 'build'),
    app: path.join(__dirname, 'app'),
    vendor: path.join(__dirname, '../http_static/vendors/development'),
    annotator: path.join(__dirname, '../http_static/vendors/Annotator'),
    mirador: path.join(__dirname, '../http_static/vendors/mirador')
};

module.exports = {
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    entry: {
    	text: [
    		PATHS.app + '/index_text.js',
    		PATHS.vendor + '/json2.js',
            PATHS.app + '/summernote_for_hxatlite.js',
            PATHS.vendor + "/jquery.tokeninput.js",
    		PATHS.app + '/common.js',
            'annotator',
            PATHS.annotator + "/plugins/localstore-annotator.js",
            PATHS.annotator + "/plugins/highlightTags-annotator.js",
            PATHS.static_folder + "/AController.js",
            PATHS.static_folder + "/TargetObjectController.js",
            PATHS.annotator + "/plugins/summernote-richtext-annotator.js",
    	],
    	image: [
    		PATHS.app + '/index_image.js',
    		PATHS.vendor + '/json2.js',
            PATHS.app + '/common.js',
            PATHS.mirador + '/mirador.js',
            path.join(__dirname, '../http_static/vendors/mirador-v2/js/lib/state-machine.min.js'),

        ],
    	video:[
	        PATHS.app + '/index_video.js',
	        PATHS.vendor + '/json2.js',
            PATHS.app + '/common.js',
	        PATHS.app + '/summernote_for_hxatlite.js',
	        PATHS.app + "/video_for_hxatlite.js",
	        PATHS.vendor + "/vjs.youtube.js",
	        PATHS.vendor + "/videojs-transcript.js",
	        PATHS.vendor + "/jquery-Watch.js",
	        PATHS.vendor + "/jquery.tokeninput.js",
	        PATHS.vendor + "/rangeslider.js",
	        PATHS.vendor + "/video-speed.js",
	        'annotator',
	        PATHS.annotator + "/plugins/highlightTags-annotator.js",
		    PATHS.annotator + "/plugins/timeRangeEditor-annotator.js",
		    PATHS.annotator + "/plugins/summernote-richtext-annotator.js",
		    PATHS.vendor + "/videojs-annotator-plugin.js",
		    PATHS.annotator + "/plugins/videojs-annotator.js",
		    PATHS.annotator + "/plugins/localstore-annotator.js",
            // PATHS.static_folder + "/AController.js",
            // PATHS.static_folder + "/TargetObjectController.js"
	    ]
	},

    output: {
        path: PATHS.build,
        filename: 'hxat_lite_[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "stripcomment"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(eot|gif|svg|png|jpg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: require.resolve('url-loader')
            },
            {
                test: /mirador\.js/,
                loader: 'imports-loader?define=>false&require=>false&exports=>false&module=>false'
            },
            {
                test: /state-machine\.min\.js/,
                loader: 'expose-loader?StateMachine'
            },
            // {
            //     test: /isfahan\.js/,
            //     loader: 'expose-loader?Isfahan'
            // },
            // {
            //     test: /mirador-v2\/.+\.js/,
            //     loader: 'imports-loader?exports=>false&define=>false&require=>false'
            // },

        ],
        modulesDirectories: [
          'node_modules'
        ],
    },
    plugins: [
        new ExtractTextPlugin('hxat_lite_[name].css'),
        new webpack.ProvidePlugin({
            'Annotator': 'annotator',
            $: require.resolve('jquery'),
            jQuery: require.resolve('jquery'),
            'window.jQuery': require.resolve('jquery'),
            // 'Handlebars': require.resolve('handlebars/dist/handlebars.min.js'),
            'i18n': require.resolve('i18next'),
            // 'Isfahan': PATHS.mirador + '/js/lib/isfahan.js'
        }),
    ],
    resolve: {
        alias: {
            'annotator': PATHS.annotator + '/annotator-full.js'
        }
    }
};