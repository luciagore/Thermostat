$(document).ready(function() {

  var thermostat = new Thermostat();
  displayWeather('London');
  updateTemperature();
  $('#temperature').text(thermostat._temperature);

  function updateTemperature() {
    $('#inside-temperature').text(thermostat.temperature());
    $('#inside-temperature').attr('class', thermostat.usage());
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  $('#temp-up').click(function() {
    thermostat.up(1);
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down(1);
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.powersavingon();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powersavingoff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   })
  }

  })
