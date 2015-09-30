# Vinyl Source Stream and Globbing 

Gulp as has been clearly established is the streaming build system. But what hasn't been established is what *type* of streams we are talking about. Node has a stream data type. Lets make a node stream:

```
var fs = require('fs');

var readable = fs.createReadStream('usdeclar.md');
readable.on('data', function(chunk) {
  console.log('got %d bytes of data', chunk.length);
});
```

This isn't the type of stream that gulp uses. If you tried to pipe that stream to a gulp plugin it wouldn't work. We need to get our data into a [Vinyl FS](https://github.com/gulpjs/vinyl-fs) stream. Thankfully this is exactly what `gulp.src()` does. It takes in a glob (we'll get there) and turns all the files into a vinyl-fs object. The other great gulp function for working with files is gulp.dest() which takes vinyl-stream and turns it back into files. Now we can build a simple and helpful gulp task (one we use in our base build setup)

```
gulp.task('copy', function(){
	gulp.src('src/cusdeclar.md').pipe(gulp.dest('./dest'));
}) 
```

