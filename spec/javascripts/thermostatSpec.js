'use strict';

describe('Thermostat', function () {

    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it('has an initial starting temperature of 20 degrees', function () {
        expect(thermostat.temperature).toEqual(20);
    });
});