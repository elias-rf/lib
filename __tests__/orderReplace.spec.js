import sortReplace from "../orderReplace";

describe("substitui ordem de query", () => {
  it("substituir", () => {
    expect(sortReplace({ field: "fld", order: "asc" })).toEqual({
      column: "fld",
      order: "asc",
    });
  });
});
