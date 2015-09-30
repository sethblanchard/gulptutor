var gulp = require('gulp');
var marked =  require('gulp-marked');

gulp.task('copy', function(){
	gulp.src('src/usdeclar.md').pipe(gulp.dest('./dest'));
});

gulp.task('markedown', function(){
	gulp.src('./src/*.md')
		.pipe(marked())
		.pipe(gulp.dest('./dest'));
});