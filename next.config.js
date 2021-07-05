console.log('start save file from strapi to json')
const fs = require('fs')
const path = require('path')
const contentUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL + '/contents?_locale=all&_limit=10000'
const languages = ['en', 'de', 'es', 'it', 'fr', 'ru', 'pt']
const pages = ['main', 'gbn', 'crypto', 'tradovate']

fetch(contentUrl)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    for (const language of languages) {
      for (const page of pages) {
        const content = data.filter((value) => value.locale === language && value.page === page)
        const filename =
          path.sep +
          'public' +
          path.sep +
          'locales' +
          path.sep +
          language +
          path.sep +
          page +
          '.json'

        const result = {}
        content.map((v) => {
          result[v.key] = v.text
          return result
        })
        fs.writeFileSync(__dirname + filename, JSON.stringify(result))
      }
    }
  })

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
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  })
)
