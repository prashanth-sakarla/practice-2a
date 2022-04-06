const addDays = require("date-fns/addDays");

const daysFunction = function (days) {
  return addDays(new date(22, 07, 2020), days);
};

module.exports.daysFunction = daysFunction;
