'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
// JSHint
gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(require('jshint-stylish')));
});
