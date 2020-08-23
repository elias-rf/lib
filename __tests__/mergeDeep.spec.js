const mergeDeep = require("../mergeDeep");

describe("mergeDeep", () => {
  it("can extend on 1 level", () => {
    const a = { hello: 1 };
    const b = { world: 2 };
    expect(mergeDeep(a, b)).toEqual({
      hello: 1,
      world: 2,
    });
  });

  it("can extend on 2 levels", () => {
    const a = { person: { name: "John" } };
    const b = { person: { age: 30 } };
    expect(mergeDeep(a, b)).toEqual({
      person: { name: "John", age: 30 },
    });
  });

  it("can extend with Buffer values", () => {
    const a = { hello: 1 };
    const b = { value: Buffer.from("world") };
    expect(mergeDeep(a, b)).toEqual({
      hello: 1,
      value: Buffer.from("world"),
    });
  });
});
