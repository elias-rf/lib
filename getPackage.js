const fs = require("fs");

const getPackage = () => {
  const pack = fs.readFileSync("./package.json", "utf8");
  return JSON.parse(pack);
};

module.exports = getPackage;
