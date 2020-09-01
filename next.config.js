const { name } = require('./package.json')

module.exports = {
    exportPathMap: function () {
        return {
            "/": { page: "/" },
        }
    },
    basePath: `/${name}`,
    assetPrefix: `/${name}/`,
    webpack: (config) => {
        config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === 'babel-loader') {
                rule.options.cacheDirectory = false
            }
            return rule
        })
        return config
    }
}