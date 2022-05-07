const express = require('express');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const cardapioController = require('../controllers/cardapioController');
const router = express.Router();
const servicosController = require('../controllers/servicosController')

// const rotasRequire = require('../controllers/servicosController')

// router.get('/cardapio', rotasRequire.cardapio)

router.get('/cardapioacompanhamentos', cardapioController.acompanhamentos)
router.get('/cardapiohamburgueres', cardapioController.hamburgueres)
router.get('/cardapiobebidas', servicosController.cardapiobebidas)
router.get('/pagamentoAprovado', servicosController.pagamentoAprovado)
router.get('/pagamento', servicosController.pagamento)

module.exports = router