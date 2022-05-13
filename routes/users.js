var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')
const validator = require('../middlewares/ValidaFormsMiddlewares')

router.get('/cadastro', usuarioController.telaCadastro)
router.post('/cadastro', validator.validaCadastro, usuarioController.cadastroUsuario)
router.get('/login', usuarioController.telaLogin)
router.post('/login', usuarioController.login)
router.get('/minhaConta', usuarioController.minhaConta)
router.get('/carrinho', usuarioController.carrinho)






module.exports = router;