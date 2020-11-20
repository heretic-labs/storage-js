const gulp = require('gulp');
const concat = require("gulp-concat");
const clean = require('gulp-clean');
const minify = require('gulp-minify');

gulp.task('clean', function () {
    return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task('js', function () {
    return gulp.src(["src/*.js"], { allowEmpty: true })
        .pipe(concat("Storage.js"))
        .pipe(gulp.dest("dist", { allowEmpty: true }))
        ;
});

gulp.task("default", gulp.series(
    'clean',
    'js'
));