const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");//解构语法

const isDev = process.env.NODE_ENV === "development";
const htmlPlugin = require("html-webpack-plugin");

const config = {
    entry:path.join(__dirname,"src/index.js"),
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:"vue-loader"
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new htmlPlugin()
    ]
}

if(isDev){
    config.devServer = {
        port:8000,
        host:"0.0.0.0",
        overlay:{
            errors:true
        }
    }
}

module.exports = config;