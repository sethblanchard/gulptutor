var gulp = require('gulp');

gulp.task('default', function(){
	console.log('Hello World!');
});


gulp.task('hi-seth', function(){
	console.log('Hello Seth!');
});

gulp.task('dependents', ['default', 'hi-seth'], function(){
	console.log('The previous tasks - default and hi-seth - have competed! ')
});