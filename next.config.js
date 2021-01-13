const withImages = require('next-images')
const withFonts = require('next-fonts')
module.exports = withImages(withFonts({
    webpack(config) {
        return config;
    }
}))

module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/landings' : '',}
