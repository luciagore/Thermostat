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

});
