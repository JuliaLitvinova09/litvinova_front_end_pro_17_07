const gulp = require("gulp");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const scss = gulpSass(sass);

const BUILD_FOLDER = "./dist/";
const SRC_FOLDER = "./src/js/*.js";
const SCSS_FOLDER = "./src/scss/*.scss";

function watcher() {
  gulp.task("default", gulp.series(jsTask, scssTask, watcher));
  gulp.watch(SCSS_FOLDER, scssTask);
  gulp.watch(SRC_FOLDER, jsTask);
}

function scssTask() {
  return gulp.src(SCSS_FOLDER).pipe(scss()).pipe(gulp.dest(BUILD_FOLDER));
}

function jsTask() {
  return gulp
    .src(["./src/js/data.js", "./src/js/app.js"])
    .pipe(uglify())
    .pipe(concat("build.js"))
    .pipe(gulp.dest(BUILD_FOLDER));
}

gulp.task("default", gulp.series(jsTask, scssTask, watcher));
