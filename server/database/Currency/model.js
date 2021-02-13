const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
  name: String,
  code: String,
});

const Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;
