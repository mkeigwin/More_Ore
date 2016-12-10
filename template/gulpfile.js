const gulp = require('gulp')
const sass = require('gulp-sass')

// Declare a gulp task called changeSassToCss
gulp.task('changeSassToCss', () => {
  // Select all files in the sass directory
  // with the file extension .scss
  return gulp.src('./sass/*.scss')
  .pipe(sass())
  // Destination of the new files
  .pipe(gulp.dest('./css'))
})

// Declare a gulp task called watch
gulp.task('watch', () => {
  // Watches all files in the sass directory
  // And if anything changes, run changeSassToCss
  gulp.watch('./sass/*.scss', ['changeSassToCss'])
})



