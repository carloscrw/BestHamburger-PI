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
<<<<<<< HEAD
router.get('/pagamento', servicosController.pagamento)
=======
router.get('/pagamentoEntrega', servicosController.pagamentoEntrega)

>>>>>>> 2a30db4d9c3b1feac9e08f5edc9b081fe2a899fe

module.exports = router