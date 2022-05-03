var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuarioControllers')

router.get('/cadastro', usuarioController.cadastro)
router.post('/cadastro', usuarioController.cadastroUsuario)
router.get('/login', usuarioController.login)
router.post('/login', usuarioController.login)
router.get('/minhaConta', usuarioController.minhaConta)
router.get('/carrinho', usuarioController.carrinho)






module.exports = router;