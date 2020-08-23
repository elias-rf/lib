const { Emitter } = require("../emitter");

describe("emitter", () => {
  it("deve emitir evento", () => {
    const emitter = new Emitter();
    emitter.on("teste", () => {
      expect(1).toBe(1);
      return 1;
    });
    emitter.emit("teste");
  });

  it("deve ouvir evento apenas 1 vez", () => {
    const emitter = new Emitter();
    emitter.once("teste", () => {
      expect(1).toBe(1);
    });
    expect(emitter.count("teste")).toEqual(1);
    emitter.emit("teste");
    expect(emitter.count("teste")).toEqual(0);
  });

  it("deve reponder para todos os eventos", () => {
    const emitter = new Emitter();
    emitter.on("*", (event, ...arg) => {
      expect(event).toBe("teste");
      expect(arg).toEqual([1, 2]);
    });
    emitter.emit("teste", 1, 2);
  });

  it("deve emitir evento e off", () => {
    const emitter = new Emitter();
    const unsub = emitter.on("teste", () => {
      expect(1).toBe(1);
    });
    emitter.on("teste", () => {
      expect(2).toBe(2);
    });

    emitter.emit("teste");
    expect(emitter.keys()).toEqual(["teste"]);
    expect(emitter.count("teste")).toEqual(2);
    unsub();
    expect(emitter.count("teste")).toEqual(1);
    expect(emitter.keys()).toEqual(["teste"]);
    emitter.emit("teste");
  });

  it("deve limpar um evento", () => {
    const emitter = new Emitter();
    emitter.on("teste1", () => {});
    emitter.on("teste1", () => {});
    emitter.on("teste2", () => {});

    expect(emitter.keys()).toEqual(["teste1", "teste2"]);
    expect(emitter.count("teste1")).toEqual(2);
    emitter.clear("teste1");
    expect(emitter.count("teste1")).toEqual(0);
    expect(emitter.keys()).toEqual(["teste2"]);
  });
});
