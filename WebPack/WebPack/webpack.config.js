var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './main.js',
    output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
    },
    plugins: [
    ],
    module: { 
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [".tsx", ".ts", ".js"]
     },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = ''
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // Enable unglify when supports es6.
        //new webpack.optimize.UglifyJsPlugin({
        //    sourceMap: true,
        //    compress: {
        //        warnings: false
        //    }
        //}),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
