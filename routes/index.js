var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/cadastro', usuarioController.cadastro)
router.get('/login', usuarioController.login)
router.get('/cardapio', usuarioController.cardapio)

module.exports = router;