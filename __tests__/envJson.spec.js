const envJson = require("../envJson");

describe("hash", () => {
  it("deve receber um env", () => {
    const h = envJson({
      a_b_c: "linha1",
      a_e_c: "linha4",
      a_b_d: "linha2",
      z_b_d: "linha3",
    });
    expect(h).toEqual({
      a: { e: { c: "linha4" }, b: { c: "linha1", d: "linha2" } },
      z: { b: { d: "linha3" } },
    });
  });
});
