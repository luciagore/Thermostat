'use strict';

describe('Thermostat',function(){
	var thermostat;
	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('default temperature of 20', function(){
		expect(thermostat.temperature()).toEqual(20);
	});

	it('default power saving is on', function(){
		expect(thermostat.powersaving()).toEqual(true);
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
		it('cannot go above 32 when power saving mode is off', function() {
			thermostat.powersavingoff()
			expect(function(){thermostat.up(13);}).toThrowError("Power saving off: Max Temp is 32!")
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

	describe('#reset', function(){

		it('can reset temperature', function() {
			var default_temp = thermostat.temperature()
			thermostat.up(3)
			thermostat.down(4)
			thermostat.reset()
			expect(thermostat.temperature()).toEqual(default_temp)
		});
	});

});
