const pipe = (...fns) => (a) => fns.reduce((b, f) => f(b), a);
const compose = (...fns) => (a) => fns.reduceRight((y, f) => f(y), a);

module.exports = { pipe, compose };

// https://medium.com/dailyjs/using-pipe-and-compose-to-improve-procedural-code-ddf2c18094fd
