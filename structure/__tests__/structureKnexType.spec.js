const structureKnexType = require("../structureKnexType");

test("type boolean", () => {
  expect(structureKnexType("boolean")).toBe("boolean");
  expect(structureKnexType("datetime")).toBe("datetime");
  expect(structureKnexType("date")).toBe("date");
  expect(structureKnexType("time")).toBe("time");
  expect(structureKnexType("timestamp")).toBe("timestamp");
  expect(structureKnexType("decimal")).toBe("decimal");
  expect(structureKnexType("float")).toBe("float");
  expect(structureKnexType("string")).toBe("string");
  expect(structureKnexType("integer")).toBe("integer");
  expect(structureKnexType("string")).toBe("string");
  expect(structureKnexType("password")).toBe("string");
  expect(structureKnexType("text")).toBe("text");
});
