var pingPong = require('./../js/pingpong.js').pingPong;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err, result) {
var result = pingPong(100);
result.forEach(function(element){
  console.log(element);
});
