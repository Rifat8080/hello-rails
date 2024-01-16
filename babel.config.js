module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
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