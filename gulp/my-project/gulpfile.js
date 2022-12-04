const { src, dest, task, watch, series, parallel } = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function index() {
	return src('src/index.js')
		.pipe(uglify())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(dest('dist'))
}

function app() {
	return src('src/app.js')
		.pipe(uglify())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(dest('dist'))
}

function watchFiles() {
	watch('src/*.js', function (cb) {
		console.log("File changed")
	})
}

task('watch', watchFiles)
exports.default = series(index, app)

