const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "assets/js"),
    publicPath: ""
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,

    host: "localhost", // Defaults to `localhost`
    port: 8080, // Defaults to 8080
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
