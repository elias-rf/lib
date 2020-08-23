const isObject = require("../isObject");

describe("isObject", () => {
  it("{} is true", () => {
    expect(isObject({})).toBe(true);
  });
  it("string is false", () => {
    expect(isObject("A")).toBe(false);
  });
  it("number is false", () => {
    expect(isObject(5)).toBe(false);
  });
  it("undefined is false", () => {
    expect(isObject(undefined)).toBe(false);
  });
  it("null is false", () => {
    expect(isObject(null)).toBe(false);
  });
  it("function is false", () => {
    expect(isObject(() => {})).toBe(false);
  });
});
