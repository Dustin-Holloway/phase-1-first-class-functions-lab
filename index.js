// Code your solution in this file!
const names = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};

function createFareMultiplier(int) {
  return function fare(num) {
    return num * int;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectDifferentDrivers(array, cbFunction) {
  const result = cbFunction(array);
  return result;
}
