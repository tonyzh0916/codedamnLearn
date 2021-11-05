var express = require('express');
var path = require('path');
var app = express();
app.use('/cssFiles', express.static(__dirname+'/assets'));
app.get('/', function(req, res){
  res.sendFile('index.html', {root:path.join(__dirname, './files')});
})

app.listen(1337, function(){
  console.log('Listening at Port 1337');
})