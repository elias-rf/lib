const getPackage = require("../getPackage");
// const { describe, it, expect } = require("@jest/globals");

it("ler package", () => {
  const pack = getPackage();
  expect(pack.name).toEqual("lib");
});
