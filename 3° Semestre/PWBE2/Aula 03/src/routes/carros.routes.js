const express = require("express");

const router = express.Router();

const CarrosControllers = require("../controllers/carros.controllers");

router.post("/novocar", CarrosControllers.novocar);

module.exports = router;