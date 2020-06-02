// Object create example

(function () {
    "use strict";

    const createBicyclePrototye = function () {
        return {
            speed: 0,
            applyBrake: function (value) {
                this.speed -= value;
            },
            speedup: function (value) {
                this.speed += value;
            },
        };
    };

    const createMountainBikeProtoype = function (prototype) {
        const obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function (value) {
            this.gear = value;
        };

        return obj;
    };

    const start = function () {
        const bicyclePrototype = createBicyclePrototye();
        const mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);

        console.log(bicyclePrototype.speed);
        bicyclePrototype.speedup(2);
        console.log(bicyclePrototype.speed);
        bicyclePrototype.speedup(5);
        console.log(bicyclePrototype.speed);
        bicyclePrototype.applyBrake(2);
        console.log(bicyclePrototype.speed);

        console.log(mountainBikePrototype.speed);
        mountainBikePrototype.speedup(3);
        console.log(mountainBikePrototype.speed);
        console.log(`Gear: ${mountainBikePrototype.gear}`);
        mountainBikePrototype.setGear(3);
        console.log(`Gear: ${mountainBikePrototype.gear}`);
    };

    start();
})();
