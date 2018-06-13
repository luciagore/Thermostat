'use strict';

describe('feature tests', function(){
	var thermostat;
	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('default temperature', function(){

		expect(thermostat.temperature()).toEqual(20);
	});

	it('increases the temperature', function(){
		thermostat.up(2)
		expect(thermostat.temperature()).toEqual(22)
	});

	it('decreases the temperature', function(){
		thermostat.down(2)
		expect(thermostat.temperature()).toEqual(18)
	});

	it('has a minimum temperature', function(){
		expect(function(){thermostat.down(11);}).toThrowError("Below minimum temperature!");

	});

	it('has is in power saving mode as default', function(){
		expect(function(){thermostat.up(6);}).toThrowError("Power saving on: Max Temp is 25!")
	});

	it('can switch to power saving off', function() {
		thermostat.powersavingoff()
		expect(thermostat.powersaving()).toEqual(false)
		expect(function(){thermostat.up(13);}).toThrowError("Power saving off: Max Temp is 32!")
	});

	it('can reset temperature', function() {
		thermostat.up(3)
		thermostat.down(4)
		thermostat.reset()
		expect(thermostat.temperature()).toEqual(20)
	});

	it('thermostat usage: low', function() {
		thermostat.down(3)
		
		expect(thermostat.usage()).toEqual('low-usage')
		
	});
	it('thermostat usage: medium', function() {

		
		expect(thermostat.usage()).toEqual('medium-usage')
		

	});
	it('thermostat usage: high', function() {
		thermostat.powersavingoff()
		thermostat.up(6)
		
		expect(thermostat.usage()).toEqual('high-usage')
		
		
	});


});
