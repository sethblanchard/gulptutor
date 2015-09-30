# Simple Gulp Tasks 
We'll ease into understanding Gulp by build 3 simple tasks that expose some gulp defaults and what explicitly goes into a task. 

First install gulp (you will need node for this) `npm install --save-dev gulp`.

Then lets make our gulpfile `touch gulpfile.js`

Open that file and add 

```
var gulp = require('gulp');

gulp.task('default', function(){
	console.log('Hello World!');
});

```

Now from the terminal you can run `gulp` and you should see "hello world" logged.


Let's break down the parts of this call. 

`gulp.task` is exactly what you think it is: its how you define a gulp task. The function takes 3 parameters: name, dependents, task function but can be run with just name and task function like above. 

Let's make another gulp task. 

gulp.task('hi-<your name here>', function(){
	console.log('Hello <your name here>!');
});

Now to run this one in the terminal type `gulp hi-<your name here>`. Notice how we needed to call this task by its name when we ran it. When you type `gulp` it runs the default task. If you want to run an individual task you just call it by name `gulp taskname`. 

Back to the third parameter for gulp tasks. We'll stick a couple tasks together. Add another task to your gulp file.

```
gulp.task('dependents', ['default', 'hi-<your name here>'], function(){
	console.log('The previous tasks - default and hi-<your name here> - have competed! ')
});
``` 

And now if you run `gulp dependents` you should see all three tasks run in order. This is how the graphics templates build works when you run gulp. We make the default task dependent on a bunch of other tasks (watch, copy, etc.) and then when you type default we run them all.

Now that you have the basic task structure down lets do some other stuff.
