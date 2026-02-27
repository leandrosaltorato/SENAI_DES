const express = require("express");

const router = express.Router();

const ClientesControllers = require("../controllers/clientes.controllers");

router.post("/clientes/cadastrar", ClientesControllers.novoclient);
router.get ("/clientes/listar", ClientesControllers.listarclientes);
router.get("/clientes/buscar/:id", ClientesControllers.buscarcliente);
router.delete("/clientes/excluir/:id", ClientesControllers.apagarcliente);
router.put("/clientes/atualizar/:id", ClientesControllers.atualizarcliente);

module.exports = router;