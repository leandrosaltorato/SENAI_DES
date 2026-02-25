const express = require("express");

const router = express.Router();

const ClientesControllers = require("../controllers/clientes.controllers");

router.get("/new",  ClientesControllers.novaTurma);

module.exports = router;