var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

const usuarioController = require("../controllers/usuarioControllers")
const servicosController = require('../controllers/servicosController')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
router.get('/', usuarioController.index)
router.get('/cadastro', usuarioController.cadastro)
router.get('/login', usuarioController.login)
router.get('/minhaConta', usuarioController.minhaConta)
router.get('/carrinho', usuarioController.carrinho)

router.get('/cardapio', servicosController.cardapio)

module.exports = router;