const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    modules: ['app/javascript', 'node_modules'],
    extensions: ['.js', '.jsx'], // Add this line to include '.jsx' extension
  },
  entry: './app/javascript/application.js', // Update with the actual file name
  output: {
    filename: 'bundle.js', // Adjust the output filename as needed
    path: path.resolve(__dirname, 'dist'), // Adjust the output path as needed
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
