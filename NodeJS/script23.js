
var express = require('express');
var app = express();
var router = express.Router();

app.arguments('/myFirstRoute', router);

//localhost//1337/myFirstRoute/heyThereFirstRoute
router.get('/heyThereFirstRoute', function(req, res){
  res.end('What  is going on');
})

router.get('/heyThereFirstRouteAgain', function(req, res){
  res.end('What  is going on there, this is a bit differeent!');
})

app.listen(1337, function(){
  console.log('I am listening..'); 
})