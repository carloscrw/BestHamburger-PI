const express = require('express');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const cardapioController = require('../controllers/cardapioController');
const router = express.Router();
const servicosController = require('../controllers/servicosController')

// const rotasRequire = require('../controllers/servicosController')
router.get('/pagamentoPix', servicosController.pagamentoPix)
    // router.get('/cardapio', rotasRequire.cardapio)

router.get('/cardapioacompanhamentos', cardapioController.acompanhamentos)
router.get('/cardapioahamburgueres', servicosController.cardapioahamburgueres)
router.get('/cardapiobebidas', servicosController.cardapiobebidas)
router.get('/pagamentoAprovado', servicosController.pagamentoAprovado)


module.exports = router