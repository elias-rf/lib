const verify = require("../verify");

describe("verify", () => {
  it("deve verificar um código hash", async () => {
    const v = await verify("abc", "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", "sha256");
    expect(v).toEqual(true);
  });

  it("deve recusar um código hash errado", async () => {
    const v = await verify(
      "senhaAntiga2",
      "66944cc898a9a7bc8427abafdfbef0ddadd3ec4f0aed50266702dde04c9a80be",
      "sha256",
    );
    expect(v).toEqual(false);
  });
});
