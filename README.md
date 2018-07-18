Thermostat Challenge
=====================

This was a project that I completed throughout Week 5 of the Makers Coding Bootcamp. The project was my first in Javascript, using JQuery, API and Callback paterms, as well as HTML and CSS in Javascript. I had the help of coaches, rotating pair partners and online and specific course resources. 

The aim was to create a Thermostat based on the current weather outside, depending on the city you are in!

Challenge features:
-------
* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

## Tech/Framework used

Built in Javascript
Tested using Jasmine 3.1.0

## Installing the code

1. To install, first clone this repository.
2. Find the `index.html` file in the project root and open in browser!

## How to use the Thermostat

1. The 'Current Outside Temperature' is set to that of London - this can be changed in the code.
2. If you would like to select a different city you can type the city into the form and press select, this will then change the 'Current Outside Temperature' to that of the city you've selected.
3. The Current Inside Temperature is set to 20. To change this you can press the + or - buttons which will increment or reduce the thermostat temperature.
4. If you would like to turn the temperature up to higher than 25 degrees, then you will need to press the PSM off button which turns off the power saving mode and allows you to turn the temperature up to 32 degrees.

## How to run the tests

1. Select the `SpecRunner.html` file in the project root and open in browser - this takes you to Jasmine Spec Runner - you'll see all tests passing!
