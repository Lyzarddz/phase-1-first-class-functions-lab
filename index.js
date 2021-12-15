// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
    return function innerFunction(fare){
        return fare * integer;
    }
}

const fareDoubler = function(num){
    return num * 2;
}

const fareTripler = function(num){
    return num * 3;
}

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}

