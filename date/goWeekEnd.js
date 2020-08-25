const addDaysDate = require("./addDaysDate");

/**
 * Calcula o sábado da semanda indicada pela data
 */
function goWeekEnd(date) {
  return addDaysDate(date, 6 - date.getUTCDay());
}

module.exports = goWeekEnd;
