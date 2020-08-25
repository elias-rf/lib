const dateAddDays = require("./addDaysDate");
/**
 * Calcula o domingo da semana indicada pela data
 */
function goWeekStart(date) {
  return dateAddDays(date, -date.getUTCDay());
}

module.exports = goWeekStart;
