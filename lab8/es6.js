// Using ES6 syntax example

"use strict";

class Bicycle {
    constructor() {
        this.speed = 0;
    }

    applyBrake(value) {
        this.speed -= value;
    }

    speedup(value) {
        this.speed += value;
    }
}

class MountainBike extends Bicycle {
    constructor() {
        super();
        this.gear = 1;
    }

    setGear(value) {
        this.gear = value;
    }
}

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
