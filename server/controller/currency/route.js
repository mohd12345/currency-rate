const express = require("express");

const currencyController = require("./currency");

const router = express.Router();

router.get("/", currencyController.list);

module.exports = router;
