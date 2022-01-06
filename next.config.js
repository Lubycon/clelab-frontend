module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // @svgr/webpack => <SVG />
      // url-loader ReactComponet as SVG
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
  experimental: {
    concurrentFeatures: true,
  },
}
