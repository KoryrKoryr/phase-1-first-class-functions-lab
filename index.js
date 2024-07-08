const returnFirstTwoDrivers = function (drivers) {
  if (Array.isArray(drivers) && drivers.length >= 2) {
    return drivers.slice(0, 2);
  } else {
    return [];
  }
};

const returnLastTwoDrivers = function (drivers) {
  if (Array.isArray(drivers) && drivers.length >= 2) {
    return drivers.slice(-2);
  } else {
    return [];
  }
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selector) {
  return selector(drivers);
};
