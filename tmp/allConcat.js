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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank You, ' + email + ' has been added to our list!</p>');
  });
});
