const currencyList = require("./currency");
const currencyModel = require("../database/Currency/model");

class Seed {
  async start() {
    const count = await currencyModel.countDocuments();
    if (count !== currencyList.length) {
      console.log("Currency seed start");
      await currencyModel.deleteMany({});
      await currencyModel.insertMany(currencyList);
      console.log("Currency seed end");
    }
  }
}

module.exports = new Seed();
