const replaceStringAll = require("../replaceStringAll");

describe(__filename, () => {
  it("deve funcionar para 0 substituições", () => {
    expect(replaceStringAll("ABCD", ".", "")).toEqual("ABCD");
  });
  it("deve funcionar para 1 substituição", () => {
    expect(replaceStringAll("AB.CD", ".", "")).toEqual("ABCD");
  });
  it("deve funcionar para >1 substituições", () => {
    expect(replaceStringAll("A.B.C.D.", ".", "")).toEqual("ABCD");
  });
});
