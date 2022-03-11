let mix = require('laravel-mix')
const path = require('path');

mix.setPublicPath('dist')
   .js('resources/js/field.js', 'js').vue()
   .webpackConfig({
      resolve: {
          alias: {
              'baseresource': path.resolve(__dirname, 'resources/js/'),
          },
      },
  })
