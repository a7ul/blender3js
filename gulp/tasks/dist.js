'use strict';

var gulp = require('gulp');
var rev = require('gulp-rev');
var plumber = require('gulp-plumber');
// Build
gulp.task('dist', ['html', 'images:dist', 'styles:dist', 'vendor', 'browserify'], function() {
  return gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js'], {base: '.tmp'})
    .pipe(plumber())
    .pipe(gulp.dest('dist'))
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});
