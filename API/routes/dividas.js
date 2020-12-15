//esta file controla as dividas em geral.
const express = require("express");
const router = express.Router();
const checkLogin = require("../middleware/check-login");

const DividasController = require("../controllers/Dividas");
//controller das dividas
//const checkAuth = require("../middleware/check-auth")//a checkAuth é a middleware do log-in

//post de uma divida da JEK e do Tesoureiro
router.post("/", DividasController.criar_divida_jeK);
router.post("/tesoureiro", DividasController.criar_divida_Tesoureiro);

router.get("/getall",DividasController.get_all_dividas);


// GET DIVIDAS POR DEPARTAMENTO
router.get("/:departement", checkLogin, DividasController.dividas_departamento);

module.exports = router;
