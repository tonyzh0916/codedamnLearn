var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/cssFiles', express.static(__dirname+'/assets'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root:path.join(__dirname, './files')});
})

app.post('/', function(req, res){
  res.end(JSON.stringify(req.body));
})

app.listen(1337, function(){
  console.log('Listening at Port 1337');
})