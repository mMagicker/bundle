const { src, dest, task, watch, series, parallel } = require('gulp')

function index() {
	return src('testSrc/index.js')
		.pipe(dest('dist'))
}


const watcher = watch('testSrc/**/*.js')
watcher.on("change", function (path, stats) {
	console.log(path)
	// src/test/test.js
	src(path).pipe(dest('dist'))
})


// task('watch', watchFiles)
exports.default = series(index,)

