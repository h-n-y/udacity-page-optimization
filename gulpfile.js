var gulp = require('gulp');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');

gulp.task('default', function() {
  console.log('GULP GULP GULP');
});

gulp.task('imagemin', function() {
  console.log("Begin imagemin task...");
  gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img/'));
  gulp.src('src/views/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/views/images/'));
});

gulp.task('imageResize', function() {
  var srcImgPath = 'src/views/images/';
  var destImgPath = 'dist/views/images/';

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
