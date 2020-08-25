const createCacheSql = require("../createCacheSql");

describe("createCacheSql", () => {
  it("Deve recuperar do cache", async () => {
    const mockCache = {
      has: jest.fn(() => true),
      set: jest.fn(),
      get: jest.fn(() => ({ resp: true })),
    };
    const cache = createCacheSql({ cache: mockCache });
    const mockQuery = "Select * from table";

    const rsp = await cache(mockQuery);
    expect(mockCache.has.mock.calls.length).toBe(1);
    expect(mockCache.has.mock.calls[0][0]).toEqual(mockQuery);
    expect(mockCache.get.mock.calls.length).toBe(1);
    expect(mockCache.get.mock.calls[0][0]).toEqual(mockQuery);
    expect(mockCache.set.mock.calls.length).toBe(0);
    expect(rsp).toEqual({ resp: true });
  });

  it("Deve salvar no cache", async () => {
    const mockCache = {
      has: jest.fn(() => false),
      set: jest.fn(),
      get: jest.fn(),
    };
    const cache = createCacheSql({ cache: mockCache });
    const mockQuery = {
      toString: () => "Select * from table",
      then: (resolve) => resolve({ resp: true }),
    };

    const rsp = await cache(mockQuery);
    expect(mockCache.has.mock.calls.length).toBe(1);
    expect(mockCache.has.mock.calls[0][0]).toEqual("Select * from table");
    expect(mockCache.get.mock.calls.length).toBe(0);
    expect(mockCache.set.mock.calls.length).toBe(1);
    expect(mockCache.set.mock.calls[0][0]).toEqual("Select * from table");
    expect(rsp).toEqual({ resp: true });
  });
});
