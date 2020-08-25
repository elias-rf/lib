const mockDb = require("mock-knex");
const knexTestDb = require("./knexTestDb");
const knex = require("knex");

function knexTest(dbs) {
  let logger = [];

  for (const db of dbs) {
    mockDb.mock(db);
  }

  const tracker = mockDb.getTracker();
  tracker.install();

  tracker.on("query", function checkResult(query, step) {
    query.response(knexTestDb(query));
    logger.push(query);
  });

  return logger;
}

module.exports = knexTest;
