const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "../docs"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin({patterns:['index.html', { from: 'assets', to: 'assets' }]})
  ],
  experiments: {
    asyncWebAssembly: true
  }
};
