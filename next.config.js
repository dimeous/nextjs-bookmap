console.log('start save file акщь strapi to json')
const fs = require('fs')
const path = require('path')
const contentUrl = 'http://165.227.11.171:1337/contents?_locale=all'
const languages = ['en', 'de', 'es', 'it', 'fr', 'ru']
const pages = ['main']

fetch(contentUrl)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log('origin', data)
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

        MS0NEWlivetradingSsessionsWithproTraders
        mS0AtradingPlatformThatDisplaysML

        console.log(page + language, content)
        const result = {}
        const saveData = content.map((v) => {
          result[v.key] = v.text
          return result
        })
        console.log('save', saveData)
        fs.writeFileSync(__dirname + filename, JSON.stringify(saveData))
      }
    }
  })
console.log('end save file акщь strapi to json')

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
