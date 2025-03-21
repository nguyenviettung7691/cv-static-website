//Import

const gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

//SCSS

function style() {
    return gulp.src('./assets/scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({ style: 'compressed', quietDeps: true }).on('error', sass.logError))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
}

//Serve and watch

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        startPath: './index.html',
        ghostMode: false,
    });
    gulp.watch('./assets/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./assets/js/*.js').on('change', browserSync.reload);

}

//Copy Assets

function copyAssets() {
    return gulp.src([
        './node_modules/@fortawesome*/**/*',
        './node_modules/bootstrap*/**/*',
        './node_modules/jquery*/**/*',
        './node_modules/@popperjs*/**/*',
    ], { encoding: false })
    .pipe(gulp.dest('./assets'))
    .pipe(browserSync.stream());
}

exports.style = style;
exports.watch = watch;
exports.build = series(copyAssets, style);
