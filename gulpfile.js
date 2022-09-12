'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const watchSass = require("gulp-watch-sass");
const browserSync = require('browser-sync').create();


 
gulp.task('sass', function () {
   return gulp.src('./css/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('./css'));
 });

 gulp.task("sass:watch", () => watchSass(["./css/*.scss"])
   .pipe(sass())
   .pipe(gulp.dest("./css")));
 
 gulp.task('browser-sync', function () {
    var files = [
       './*.html',
       './css/*.css',
       './img/*.{png,jpg,gif}',
       './js/*.js'
    ];
 
    browserSync.init({
       files,
       watch: true,
       server: {
          baseDir: "./"
       }
    });
 
 });
 

 
gulp.task('default', gulp.parallel(['sass:watch','browser-sync']));
