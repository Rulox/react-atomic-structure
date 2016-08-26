var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify       = require('gulp-notify');
//var babel        = require('gulp-babel');
var babelify     = require('babelify');
var browserify   = require('browserify');
//var browserify   = require('gulp-browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {
    browserSync.init({
        server: './public'
    });
    gulp.watch('app/**/*.scss', ['sass']);
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('public/*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./app/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
        .pipe(notify({message: 'CSS created!', onLast: true}));
});

// Transpile ES6 js (React app) into JS & auto-inject into browsers
gulp.task('js', function() {
    var bundler = browserify('./app/app.js').transform("babelify", {presets: ["es2015", "react"]});
    return bundler.bundle()
        /*.pipe(babel({
            presets: ['es2015', 'stage-0', 'react']
        }))*/
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(browserSync.stream())
        .pipe(notify({message: 'JS bundle created!', onLast: true}));
});

// Tasks
gulp.task('default', ['serve']);