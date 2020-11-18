const gulp = require('gulp');
const concat = require("gulp-concat");
const clean = require('gulp-clean');
const minify = require('gulp-minify');

gulp.task('clean', function () {
    return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task('js', function () {
    return gulp.src(["src/Storage.js"], { "allowEmpty": true })
        //.pipe(concat("Storage.js"))
        .pipe(minify())
        .pipe(gulp.dest("dist"))
        ;
});

gulp.task("default", gulp.series(
    'clean',
    'js'
));