const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path')

module.exports = {

    entry: {
        index: './src/index/index.js',
        login: './src/login/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/build.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                }
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,

            // 取消eslint-loader开启代码检查
            use: ['babel-loader'/*, 'eslint-loader'*/]
        }, {
            // 打包图片、字体等资源文件
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    // 当资源文件大小小于limit值时，会以Data URI的格式，内嵌到HTML中
                    limit: 10000,
                    name: 'rs/[hash].[ext]'
                }
            }]
        }, {
            test: /\.s?css$/,

            // 将样式表提取到文件
            use: ExtractTextPlugin.extract({

                // 当输出到多目录时，解决字体打包后，css打包文件引用位置不对的情况
                publicPath: "../", 

                // 当使用 sass 语法时，取消行内注释，但是生成的样式文件不被压缩
                use: ["css-loader"/*, "sass-loader"*/]
            })

        }, {
            test: /\.html$/,
            use: "html-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index/index.html',
            filename: 'index/index.html',
            chunks: ['index', 'vendor', 'common']
        }),

        new HtmlWebpackPlugin({
            template: './src/login/index.html',
            filename: 'login/index.html',
            chunks: ['login', 'vendor', 'common']
        }),

        new VueLoaderPlugin(),

        // 将样式表提取到文件
        new ExtractTextPlugin("[name]/style.css")
    ],
    
    /**
     *
     * 代码压缩配置
     */
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    /*compress: true,*/
                    mangle: true,
                    minify: true, 
                    output: { 
                        // 去掉注释
                        comments: false
                    }
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                //node_modules内的依赖
                vendor:{
                    chunks:"all",
                    test: /[\\/]node_modules[\\/]/,
                    name:"vendor",
                    minChunks: 1, //引用次数x次以上则提取
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority:100,
                    // enforce: true?
                },
                // 'src' 下的类库
                common: {
                    chunks:"all",
                    test:/[\\/]src[\\/].*\.js/,//也可以传入文件/[\\/]src[\\/]js[\\/].*\.js/,  
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority:1
                }
            }
        } 
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true, //不跳转
        noInfo: true,
        inline: true //实时刷新
    },
    performance: {
        hints: false
    },
}
