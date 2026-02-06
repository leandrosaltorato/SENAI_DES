const express = require("express");

const router = express.Router();

const listarController = require("../controllers/lista.controller");

router.get("/listar",  listarController.listarItens);

module.exports = router;