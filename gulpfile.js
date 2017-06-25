'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.initialize(gulp);

gulp.task('watch', ['test'], function(){
  gulp.watch(['src/**/*.ts'], ['test']);
});
