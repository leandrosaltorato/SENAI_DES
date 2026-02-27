const express = require("express");

const router = express.Router();

const CarrosControllers = require("../controllers/carros.controllers");

router.post("/carros/cadastrar", CarrosControllers.novocar);
router.get ("/carros/listar", CarrosControllers.listarCarros);
router.get("/carros/buscar/:id", CarrosControllers.buscarCarro);
router.delete("/carros/excluir/:id", CarrosControllers.apagarCarros);
router.put("/carros/atualizar/:id", CarrosControllers.atualizarCarros);

module.exports = router;