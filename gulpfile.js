/**
 * 
 * QUICK IMG GULPER
 *
 * Simple gulp-tool to optimize images.
 * 
 * @author Christoph Sippel <hellopastparty@gmail.com>
 * @version 1.0.0
 * 
 * @description Drop you image files into /images, run `gulp`, processed and optimized images will be in /optimized-images
 * 
 */
'use strict';

const gulp     = require('gulp'),
      imagemin = require('gulp-imagemin'),
      cache    = require('gulp-cache'),
      del      = require('del');

//
// @link https://github.com/sindresorhus/gulp-imagemin#imageminoptions
//
var imageminOptions = {
    optimizationLevel: 3,
    progressive: true,
    interlaced: true
};

//
// CAUTION! This actually deletes files!
//
gulp.task('clean', () => {
    return del(['./images/*', './optimized-images/*']);
});

//
// Take all uncached images from /images, optimize them, and copy to /optimized-images
// 
gulp.task('default', () => {
    return gulp.src('./images/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin(imageminOptions)))
        .pipe(gulp.dest('./optimized-images'))
});
