const { i18n } = require('./next-i18next.config')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withImages(
  withFonts({
    webpack(config) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // your aliases
      }

      // config.node = {
      //   fs: "empty",
      //   net: "empty",
      //   tls: "empty",
      //   child_process: "empty",
      //   console: true,
      // };
      // Replaced above with below for webpack 5.
      // Reference: https://webpack.js.org/migrate/5/#clean-up-configuration

      return config
    },
    poweredByHeader: false,
    future: {
      webpack5: true,
    },
    i18n,
  })
)
