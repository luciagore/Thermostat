'use strict';

describe('feature tests', function(){
	var thermostat;
	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('default temperature', function(){

		expect(thermostat.temperature()).toEqual(20);
	});

	

});