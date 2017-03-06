var path = require('path')
var postcssEasyImport = require('postcss-easy-import')
var precss = require('precss')
var rucksackCss = require('rucksack-css')
var postcssAssets = require('postcss-assets')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')

module.exports = function() {
  return {
    plugins: [
      postcssEasyImport({
        prefix: '_'
      }),
      precss({
        import: {
          disable: true
        }
      }),
      rucksackCss({
        fallbacks: true
      }),
      postcssAssets({
        loadPaths: [path.join(process.cwd(), 'client/static/img')],
        basePath: 'client',
        cachebuster: true,
        relative: true
      }),
      autoprefixer({
        browsers: ['last 2 versions', '> 5%', 'safari >= 5', 'ie >= 8', 'opera >= 12', 'Firefox ESR', 'iOS >= 6', 'android >= 4']
      }),
      cssnano({
        safe: true,
        discardComments: {
          removeAll: true
        },
        filterPlugins: false
      })
    ]
  }
}
