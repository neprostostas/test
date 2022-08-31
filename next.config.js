const withImage = require('next-images');

module.exports = withImage({
  extends: [
    // ...
    'plugin:@next/next/recommended',
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
        },
      },
    ],
    rules: [
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  images: {
    disableStaticImages: true,
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|js)',
        // locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999',
          },
        ],
      },
    ];
  },
});