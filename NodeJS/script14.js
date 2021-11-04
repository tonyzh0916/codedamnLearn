var express = require('express');

var app = express();

app.get('/helloThere', function(request, response){
  response.send("Hello")
})
app.listen(1337, function(){
  console.log("Listenng .....")
})