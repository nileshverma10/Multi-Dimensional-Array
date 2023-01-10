var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('text.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(2500);

//  <==========================================================================================================>


var fs = require('fs');

fs.appendFile('text.html', 'Hello Hawkeye this side!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


//  <==========================================================================================================>


var fs = require('fs');

fs.open('text.html', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

//  <==========================================================================================================>


var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello hawkeye this side have a good day!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//  <==========================================================================================================>

var fs = require('fs');

fs.appendFile('text.html', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});


//  <==========================================================================================================>

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


//  <==========================================================================================================>

var fs = require('fs');

fs.unlink('mynewfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


//  <==========================================================================================================>

var fs = require('fs');

fs.rename('text.html', 'hawkeye.html', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});