const currencyModel = require("./model");

class CurrencyRepository {
  constructor() {
    this.model = currencyModel;
  }

  async getAll() {
    console.log("CurrencyRepository:::::getAll");
    return this.model.find({});
  }
}

module.exports = new CurrencyRepository();
