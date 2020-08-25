const dateToString = require("./dateToString");

/**
 *
 *
 * @export
 * @param {(string | Date)} date
 * @returns {string} data formatada
 */
function dateUsToString(date) {
  return dateToString(date, "yyyy-MM-dd");
}

module.exports = dateUsToString;
