var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssFiles', express.static(__dirname+'/assets'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root:path.join(__dirname, './files')});
})

/*
That might be the good example for synchronous vs asynchronous when you write fs.statSync() rather 
than fs.Sync() .

Here synchronous function fs.statSync() has to block remaining javascript code until finding whether 
file exists or not.
*/
app.get(/^(.+)$/, function(req, res){
  console.log(req.params);
  try {
     if(fs.statSync(path.join(__dirname, './files',req.params[0]+'.html')).isFile()){
    res.sendFile(req.params[0]+'.html', {root:path.join(__dirname, './files')});
    }
  } catch (error) {
     res.sendFile('404.html', {root:path.join(__dirname, './files')});
  }
})

app.listen(1337, function(){
  console.log('Listening at Port 1337');
})

//https://www.youtube.com/watch?v=dqIlEspw3XM&t=322s