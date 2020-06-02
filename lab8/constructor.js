// constructor function example

(function () {
    "use strict";

    function Bicycle() {
        this.speed = 0;
    }
    Bicycle.prototype.applyBrake = function (value) {
        this.speed -= value;
    };
    Bicycle.prototype.speedup = function (value) {
        this.speed += value;
    };

    function MountainBike() {
        Bicycle.call(this);
        this.gear = 1;
    }

    MountainBike.prototype = Object.create(Bicycle.prototype);
    MountainBike.prototype.constructor = MountainBike;
    MountainBike.prototype.setGear = function (value) {
        this.gear = value;
    };

    const start = function () {
        const bicycle = new Bicycle();
        const mountainBike = new MountainBike(bicycle);

        console.log(bicycle.speed);
        bicycle.speedup(2);
        console.log(bicycle.speed);
        bicycle.speedup(5);
        console.log(bicycle.speed);
        bicycle.applyBrake(2);
        console.log(bicycle.speed);

        console.log(mountainBike.speed);
        mountainBike.speedup(3);
        console.log(mountainBike.speed);
        console.log(`Gear: ${mountainBike.gear}`);
        mountainBike.setGear(3);
        console.log(`Gear: ${mountainBike.gear}`);
    };

    start();
})();
