const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const pxtoviewport = require("postcss-px-to-viewport");
const px2rem = require("gulp-px2rem");

// SCSS 转换为 CSS 的任务
gulp.task("px2vw", function () {
  const processors = [
    pxtoviewport({
      viewportWidth: 1920,
    }),
  ];
  return gulp
    .src("src/**/*.scss") // 指定要处理的 SCSS 文件的路径
    .pipe(sass().on("error", sass.logError)) // 将 SCSS 转换为 CSS
    .pipe(postcss(processors))
    .pipe(gulp.dest("dist/")); // 指定生成的 CSS 文件的存放路径
});
gulp.task("px2rem", function () {
  return gulp
    .src("src/**/*.scss") // 指定要处理的 SCSS 文件的路径
    .pipe(sass().on("error", sass.logError)) // 将 SCSS 转换为 CSS
    .pipe(
      px2rem({
        rootValue: 10,
        replace: true,
      })
    )
    .pipe(gulp.dest("dist/")); // 指定生成的 CSS 文件的存放路径
});

// 监听任务
gulp.task("watch", function () {
  // gulp.watch("src/**/*.scss", gulp.series("px2vw")); // px2viewport

  gulp.watch("src/**/*.scss", gulp.series("px2rem")); // px2rem
});

// exports.default = gulp.series("px2vw", "watch");
exports.default = gulp.series("px2rem", "watch");
