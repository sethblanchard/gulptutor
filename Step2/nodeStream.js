var fs = require('fs');

var readable = fs.createReadStream('usdeclar.md');
readable.on('data', function(chunk) {
  console.log('got %d bytes of data', chunk.length);
});