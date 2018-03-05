var gulp = require('gulp'),
    concatJs = require('gulp-concat'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');    


    gulp.task('sass', function () {
        return gulp.src('assets/sass/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concatJs('apploads.css'))
            // .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('css/'));
    });
    
    //Watch task
    gulp.task('sass:watch',['sass'], function() {
        gulp.watch('assets/sass/**/*.scss',['sass']);
    });