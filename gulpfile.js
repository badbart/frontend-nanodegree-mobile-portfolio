'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var miniCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-htmlmin');

gulp.task('default', ['usemin', 'copy']);

gulp.task('usemin', function() {
  console.log('Perfmatter usemin task started');

  gulp.src('src/index.html')
    .pipe(usemin({
      css: [miniCss()],
      cssprint: [miniCss()],
      html: [minifyHtml({collapseWhitespace: true})],
      js: [uglify()]
    }))
    .pipe(gulp.dest('dist/'));

  console.log('Perfmatter usemin task finished');
});

gulp.task('copy', function() {
  console.log('Perfmatter copy task started');
  gulp.src('src/img/*.*')
    .pipe(gulp.dest('dist/img/'));

  gulp.src('src/project-*.html')
    .pipe(gulp.dest('dist/'));

  console.log('Perfmatter copy task finished');
});
