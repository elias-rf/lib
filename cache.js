/**
 * Cria um cache do tipo LRU com 5 minutos de validade default
 */
const LRU = require("lru-cache");

module.exports = new LRU({ max: 500, maxAge: 1000 * 60 * 5 });
