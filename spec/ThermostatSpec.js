'use strict';

describe('Thermostat',function(){
	var thermostat;
	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('default temperature of 20', function(){
		expect(thermostat.temperature()).toEqual(20);
	});
	describe('#up', function(){
		it('increase temperature', function(){
			const number = 2
			thermostat.up(number)
			expect(thermostat.temperature()).toEqual(20 + number)
		});
		it('cannot go above 25 when in power saving mode', function(){
			expect(function(){thermostat.up(6);}).toThrowError("Power saving on: Max Temp is 25!")
		});
	});

	describe('#down', function(){

		it ('lower temperature', function(){
			const number = 2
			thermostat.down(number)
			expect(thermostat.temperature()).toEqual(20 -  number)
		});

		it ('cannot go below 10 C', function(){
			expect(function(){thermostat.down(11);}).toThrowError("Below minimum temperature!");
		});
	});


});
