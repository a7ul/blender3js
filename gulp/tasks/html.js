'use strict';

var config = require('../config');
var gulp = require('gulp');
var size = require('gulp-size');
var plumber = require('gulp-plumber');

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(plumber())
    .pipe(gulp.dest(config.dist))
    .pipe(size());
});
