const verify = require("../verify");

describe("verify", () => {
  it("deve verificar um código hash", () => {
    const v = verify("abc", "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
    console.log("v", v);
    expect(v).toEqual(true);
  });

  it("deve recusar um código hash errado", () => {
    const v = verify("senhaAntiga2", "66944cc898a9a7bc8427abafdfbef0ddadd3ec4f0aed50266702dde04c9a80be");
    expect(v).toEqual(false);
  });
});
