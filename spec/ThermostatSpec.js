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
