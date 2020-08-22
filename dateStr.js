function checkValidDateStr(str) {
  const dt = str.split("-");
  return dt[0] >= "1000" && dt[0] <= "9999" && dt[1] >= "01" && dt[1] <= "12" && dt[2] >= "01" && dt[2] <= "31";
}
/**
 * converte um tipo Date para um tipo DateStr
 *
 * @param {Date|string} date
 * @returns {string} data representada como string yyyy-mm-dd
 */
function dateToDateStr(date) {
  return new Date(date).toISOString().substring(0, 10);
}
/**
 * converte um tipo Date para um tipo DateStr
 *
 * @param {Date|string} date Data no tipo Date ou tipo String (yyyy-mm-dd)
 * @returns {string} data representada como string yyyy-mm-dd
 */
function toDateStr(date) {
  if (typeof date === "string") {
    if (checkValidDateStr(date)) {
      return date;
    } else {
      throw new Error(`Invalid date string: ${date}`);
    }
  }
  return dateToDateStr(date);
}
/**
 * Acrescenta uma quantidade de dias para uma data
 *
 * @param {Date|string} date Data no tipo Date ou tipo String (yyyy-mm-dd)
 * @param {number} days Quantidade de dias para acrescentar
 * @returns {string} data representada como string yyyy-mm-dd
 */
function addDays(date, days) {
  const dt = new Date(date);
  const rsp = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + days + 1);
  return dateToDateStr(rsp);
}

/**
 * conver um tipo string (yyyy-mm-dd) em Date
 *
 * @param {string} data Data no formato yyyy-mm-dd
 * @returns {Date} data convertida
 */
function toDate(data) {
  return new Date(data);
}

module.exports = { toDate, addDays, toDateStr };
