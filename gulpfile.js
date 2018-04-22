const gulp = require("gulp");
const bourbon = require("bourbon").includePaths;
const scss = require("gulp-sass");
const browserSync = require("browser-sync");
const connect = require("gulp-connect");

browserSync.init({
  proxy: "localhost:8080"
});

gulp.task("scss", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(
      scss({
        sourcemaps: true,
        includePaths: [bourbon]
      })
    )
    .pipe(gulp.dest("./public/css"))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch("./scss/**/*", ["scss"]);
  gulp.watch("./public/**/*").on("change", browserSync.reload);
});

gulp.task("default", ["watch"]);
