'use strict';

describe('Thermostat',function(){
	var thermostat;
	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('default temperature of 20', function(){
		expect(thermostat.temperature()).toEqual(20);
	});

	it('#up', function(){
		const number = 2
		thermostat.up(number)
		expect(thermostat.temperature()).toEqual(20 + number)
	});

	it('#down', function(){
		const number = 2
		thermostat.down(number)
		expect(thermostat.temperature()).toEqual(20 -  number)
	});
});
