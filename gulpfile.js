var gulp = require('gulp');
var postcss = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');

var autoprefixer = require('autoprefixer');
var custom_properties = require('postcss-custom-properties')
var custom_selectors = require('postcss-custom-selectors')
var doiuse = require('doiuse')

gulp.task('analyze-css', function () {
  return gulp.src('styles.css')
    .pipe(postcss([
      doiuse({
        browsers: ['ie >= 9', 'last 2 versions']
      }),
      stylelint(),
      reporter(),
      autoprefixer(),
      custom_properties(),
      custom_selectors()
    ]))
    .pipe(gulp.dest('./dist'));
});


gulp.task('css', function () {
    return gulp.src('./*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dest'));
});
