var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/buscarPontuacao", function (req, res) {
    medidaController.buscarPontuacaoQuiz(req, res);
});

router.get("/checar/:idUsuario", function (req, res) {
    medidaController.checarQuiz(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.post("/pontuacao", function (req, res) {
    medidaController.inserirPontuacaoQuiz(req, res);
});

router.put("/atualizarQuiz", function (req, res) {
    medidaController.atualizarQuiz(req, res);
});
module.exports = router;