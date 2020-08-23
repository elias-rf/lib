const dbfFactory = require("../dbfFactory");
const fs = require("../../jest/fs");

describe("dbfFactory", () => {
  it("deve criar um objecto de dados", () => {
    const dbf = dbfFactory("", fs);
    expect(typeof dbf).toBe("object");
  });

  it("deve abrir um arquivo .dbf", () => {
    const dbf = dbfFactory(`${__dirname}/TESTE.dbf`, fs);
    expect(dbf.header().versao).toBe(3);
    expect(dbf.header().recNum).toBe(2);
    expect(dbf.header().numFields).toBe(5);
    expect(dbf.recordCount()).toBe(2);
    expect(dbf.fields()).toHaveLength(5);
    dbf.close();
  });

  it("deve ler registro 1 com promise", () => {
    const dbf = dbfFactory(`${__dirname}/TESTE.dbf`, fs);
    return dbf.moveTo(1).then((rec) => {
      expect(rec["#"]).toBe(1);
      expect(rec.FIELD1).toBe("a");
      expect(rec.FIELD2).toBe(1);
      expect(rec.FIELD3).toBe(1.1);
      expect(rec.FIELD4).toBe(true);
      expect(rec.FIELD5).toEqual(new Date("2000-01-01"));
      dbf.close();
    });
  });

  it("deve ler registro 2 com promise", () => {
    const dbf = dbfFactory(`${__dirname}/TESTE.dbf`, fs);
    return dbf.moveTo(2).then((rec) => {
      expect(rec["#"]).toBe(2);
      expect(rec.FIELD1).toBe("b");
      expect(rec.FIELD2).toBe(2);
      expect(rec.FIELD3).toBe(2.2);
      expect(rec.FIELD4).toBe(false);
      expect(rec.FIELD5).toEqual(new Date("2000-01-02"));
      dbf.close();
    });
  });

  it("não deve ler registro 3 com promise", () => {
    const dbf = dbfFactory(`${__dirname}/TESTE.dbf`, fs);
    return expect(dbf.moveTo(3)).rejects.toBeDefined();
  });

  it("não deve ler registro 0", () => {
    const dbf = dbfFactory(`${__dirname}/TESTE.dbf`);
    return expect(dbf.moveTo(0)).rejects.toBeDefined();
  });
});
