function Thermostat(){
	this._temperature = 20
	this._powersaving = true
}

Thermostat.prototype.temperature = function() {
	return this._temperature;
}
Thermostat.prototype.up = function (number) {
	if(this.temperature() + number > 25 && this._powersaving) {
		throw new Error("Power saving on: Max Temp is 25!");
	}
	this._temperature += number;
};

Thermostat.prototype.down = function (number) {
	if(this.temperature() - number < 10){
		throw new Error("Below minimum temperature!");
	}
	this._temperature -= number;
};

Thermostat.prototype.powersavingon = function () {

};
