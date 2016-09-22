var gulp          = require('gulp');
var eslint        = require('gulp-eslint');
var uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat');
var gulpStyleLint = require('gulp-stylelint');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var notify        = require('gulp-notify');
var babelify      = require('babelify');
var browserify    = require('browserify');
var source        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');
var sourcemaps    = require('gulp-sourcemaps');


// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js', 'uglify'], function() {
    browserSync.init({
      server: './public'
    });
    gulp.watch('app/**/*.scss', ['sass']);
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('public/*.html').on('change', browserSync.reload);
});

// Run lint for sass
gulp.task('stylelint', function lintCssTask() {
  return gulp.src('./app/main.scss')
    .pipe(gulpStyleLint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

// Run lint for js
gulp.task('jslint', function() {
  return gulp.src(['app/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

// Min js files
gulp.task('uglify', ['js'], function() {
  gulp.src('public/js/app.js')
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('./public/js'))
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', ['stylelint'], function() {
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
gulp.task('js', ['jslint'], function() {
    var bundler = browserify('./app/app.js').transform("babelify", {presets: ["es2015", "react"]});
    return bundler.bundle()
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
