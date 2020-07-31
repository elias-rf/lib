/**
 * Zera o componente de hora de uma data
 */
function goDayStart(date) {
  const rsp = date
  rsp.setUTCHours(0, 0, 0, 0)
  return rsp
}

module.exports = goDayStart
