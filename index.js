let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


const returnFirstTwoDrivers = function(drivers){

    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){

    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){

    return function multiply(fare){

        return fare * int
    }


}

const fareDoubler = createFareMultiplier(2)

const fareTripler =  createFareMultiplier(3)

const fareQuintupler = createFareMultiplier(5)

const selectDifferentDrivers = (drivers, func) => func(drivers);