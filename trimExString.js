/**
 * Limpa strings asciiz
 */

function trimExString(txt) {
  let rsp = ''
  ;[rsp] = txt.split('\0')
  return rsp.trim()
}

module.exports = trimExString
