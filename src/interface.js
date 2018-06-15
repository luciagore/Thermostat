$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
})

$('#temp-up').click(function() {
  thermostat.up();
  updateTemperature();
});

$('#temp-down').click(function() {
  thermostat.down();
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

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.usage());
}
