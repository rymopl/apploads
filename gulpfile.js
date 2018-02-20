var gulp = require('gulp'),
    concatJs = require('gulp-concat'),
    sass = require('gulp-sass'),
   
    path = require('path');
    


    gulp.task('sass', function () {
        return gulp.src('assets/sass/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concatJs('apploads.css'))
            .pipe(gulp.dest('css/'));
    });
    
    //Watch task
    gulp.task('sass:watch',['sass'], function() {
        gulp.watch('assets/sass/**/*.scss',['sass']);
    });