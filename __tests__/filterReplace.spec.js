const filterReplace = require("../filterReplace");

describe("substitui filtros de query", () => {
  it("substituir", () => {
    expect(
      filterReplace({
        greater: 1,
        greaterEqual: 2,
        less: 3,
        lessEqual: 4,
        contains: 5,
        null: 6,
        equal: 7,
      }),
    ).toEqual({
      ">": 1,
      ">=": 2,
      "<": 3,
      "<=": 4,
      like: 5,
      isnull: 6,
      "=": 7,
    });
  });
});
