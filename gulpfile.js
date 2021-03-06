var gulp = require('gulp');
// Required plugins for tasks
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('default', function() {
  // Testing
  console.log('GULP GULP GULP');
});

// Compress images
gulp.task('imagemin', function() {
  console.log("Begin imagemin task...");
  gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img/'));
  gulp.src('src/views/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/views/images/'));
});

// Resize images
gulp.task('imageResize', function() {
  var srcImgPath = 'src/views/images/';
  var destImgPath = 'dist/views/images/';

  // 100 pixels wide
  gulp.src(srcImgPath + 'pizzeria.jpg')
      .pipe(rename('pizzeria-100.jpg'))
      .pipe(imageResize({
        width: 100,
        imageMagick: true,
        quality: 0.8
      }))
      .pipe(gulp.dest(destImgPath));

  // 300 pixels wide
  gulp.src(srcImgPath + 'pizzeria.jpg')
      .pipe(rename('pizzeria-300.jpg'))
      .pipe(imageResize({
        width: 300,
        imageMagick: true,
        quality: 0.8
      }))
      .pipe(gulp.dest(destImgPath));

    // 720 pixels wide
    gulp.src(srcImgPath + 'pizzeria.jpg')
        .pipe(rename('pizzeria-720.jpg'))
        .pipe(imageResize({
          width: 720,
          imageMagick: true,
          quality: 0.8
        }))
        .pipe(gulp.dest(destImgPath));

    // 1440 pixels wide
    gulp.src(srcImgPath + 'pizzeria.jpg')
        .pipe(rename('pizzeria-1440.jpg'))
        .pipe(imageResize({
          width: 1440,
          imageMagick: true,
          quality: 0.8
        }))
        .pipe(gulp.dest(destImgPath));

});

// Minify CSS
gulp.task('minify-css', function() {
  gulp.src('src/css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/css/'));
  gulp.src('src/views/css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/views/css/'))
});

// Minify HTML
gulp.task('minify-html', function() {
  gulp.src('src/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }))
      .pipe(gulp.dest('dist'));
  gulp.src('src/views/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }))
      .pipe(gulp.dest('dist/views/'));
});

// Minify JS
gulp.task('minify-js', function(err) {
  pump([gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js/')],
      err);

  pump([gulp.src('src/views/js/*.js'),
        uglify(),
        gulp.dest('dist/views/js/')],
      err);
});

// Watchers - automatically minify HTML, CSS, and JS files
var watchHTML = gulp.watch(['src/*.html', 'src/views/*.html'], ['minify-html']);
var watchCSS = gulp.watch(['src/css/*.css', 'src/views/css/*.css'], ['minify-css']);
var watchJS = gulp.watch(['src/js/*.js', 'src/views/js/*.js'], ['minify-js']);

// Log watcher activity to the console.
[watchHTML, watchCSS, watchJS].forEach(function(watcher) {
  watcher.on('change', function(event) {
    console.log('GULP WATCHER');
    console.log('FILE: ' + event.path);
    console.log('TYPE: ' + event.type);
  });
});
