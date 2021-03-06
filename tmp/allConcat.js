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

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)
    {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + '%');
    }).fail(function(error){
      $('.showWeather').text(error.message);
    });
  });
});
