"use strict";
{
    // Never,unknown and nullable type
    // nullable type
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    //   unknown type like typeof in js
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("Wrong input");
        }
    };
    getSpeedInMeterPerSecond(null);
    // never
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("big error got");
    //
}
