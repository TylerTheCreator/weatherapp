var pingPong = require('./../js/pingpong.js').pingPong;

$(document).ready(function() {
  debugger;
  $('#pingpong').submit(function(event) {
    debugger;
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
