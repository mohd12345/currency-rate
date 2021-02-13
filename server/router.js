const express = require("express");
const currencyRoute = require("./controller/currency/route");

const router = express.Router();

router.use("/currency", currencyRoute);

module.exports = router;
