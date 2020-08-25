const hash = require("../hash");

test("md5 abc", async () => {
  expect(await hash("abc", "md5")).toBe("900150983cd24fb0d6963f7d28e17f72");
  expect(await hash("abc", "sha256")).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
});
