const { currencyRepository } = require("../../database");

class CurrencyController {
  async list(req, res) {
    try {
      console.log("Currency Controller list");
      const result = await currencyRepository.getAll({});
      return res.json({ data: result });
    } catch (error) {
      console.log("Currency Fetch failed with error...", error);
      return res.status(500).json({ message: "Operation Failed!" });
    }
  }
}

module.exports = new CurrencyController();
