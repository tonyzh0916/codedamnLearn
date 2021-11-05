var express = require('express');
var app = exprress();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname+'/assets'));

app.get('helloThere', function(request, response){
  response.send('Hello there, from express!')
})

app.listen(1337, function(){
  console.log('Listening at Port 1337');
})