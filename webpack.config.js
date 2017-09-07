var htmlWebpackPlugin = require( "html-webpack-plugin" ); 
var  path = require( "path" );
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + "/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  "entry": {
    style: "./src/styles/style.css",
    main: "./src/Main.js",
    app: "./src/scripts/app.js"
  },

  devServer: {
    contentBase: "./public",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [

          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ]
  },
  "output": {
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js",
    path: path.resolve(__dirname + "/public"),
  },

  plugins: [
    htmlWebpackPluginConfig
  ]

}; 