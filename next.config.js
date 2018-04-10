// Support for Sass
const withSass = require('@zeit/next-sass')
module.exports = withSass()

module.exports = {
    exportPathMap: function (defaultPathMap) {
        return {
            '/': { page: '/' }
        }
    }
}