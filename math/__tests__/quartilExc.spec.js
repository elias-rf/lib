const quartilExc = require("../quartilExc");

describe("quartilExc", () => {
  it("deve aceitar array", () => {
    expect(quartilExc([6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49], 1)).toEqual(15);
    expect(quartilExc([6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49], 3)).toEqual(43);
    expect(quartilExc([25, 26, 225, 24, 23, 24, 25, 325, 28, 27], 1)).toEqual(24);
    expect(quartilExc([7, 15, 36, 39, 40, 41], 1)).toEqual(13);
    expect(quartilExc([7, 15, 36, 39, 40, 41], 3)).toEqual(40.25);
    expect(quartilExc([1, 2, 3], 1)).toEqual(1);
    expect(quartilExc([1, 2, 3], 2)).toEqual(2);
    expect(quartilExc([1, 2, 3], 3)).toEqual(3);
    expect(quartilExc([1, 2, 3, 4], 1)).toEqual(1.25);
    expect(quartilExc([1, 2, 3, 4], 2)).toEqual(2.5);
    expect(quartilExc([1, 2, 3, 4], 3)).toEqual(3.75);
    expect(quartilExc([1, 2, 3, 4, 5, 6], 1)).toEqual(1.75);
    expect(quartilExc([1, 2, 3, 4, 5, 6], 2)).toEqual(3.5);
    expect(quartilExc([1, 2, 3, 4, 5, 6], 3)).toEqual(5.25);
  });
});
