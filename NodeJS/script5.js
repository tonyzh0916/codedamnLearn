var http = require('http'); //http is a moudle 
var server = http.createServer(engine);

server.listen(1337, function(){
  console.log('Server was hit by a request');
});

function engine (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hey there, from the server :D. Request from page '+ request.url);
}