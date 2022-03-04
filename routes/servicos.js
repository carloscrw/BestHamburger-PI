const express = require('express');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router = express.Router();
const servicosController = require('../controllers/servicosController')

// const rotasRequire = require('../controllers/servicosController')
router.get('/pagamentopix', servicosController.pagamentoPix)
    // router.get('/cardapio', rotasRequire.cardapio)

module.exports = router