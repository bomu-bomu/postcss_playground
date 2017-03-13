var gulp = require('gulp');
var postcss = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');

var autoprefixer = require('autoprefixer');
var custom_properties = require('postcss-custom-properties')
var custom_selectors = require('postcss-custom-selectors')
var doiuse = require('doiuse')
var immutableCss = require('immutable-css')
var cssstat = require('postcss-cssstats')
var listSelector = require('list-selectors').plugin

gulp.task('analyze-css', function () {
  return gulp.src('*.css')
    .pipe(postcss([
      doiuse({
        browsers: ['ie >= 9', 'last 2 versions']
      }),
      immutableCss({
        strict: true
      }),
      stylelint(),
      autoprefixer(),
      custom_properties(),
      custom_selectors(),
      //cssstat(
      //  function(stats) {
      //    console.log(stats);
      //  }
      //),
      //listSelector(
      // { },
      //  function(list) { console.log(list); }
      //)
      reporter(),
    ]))
    .pipe(gulp.dest('./dist'));
});


gulp.task('css', function () {
    return gulp.src('./*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dest'));
});
