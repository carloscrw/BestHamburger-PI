var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastro', usuarioController.cadastro)

module.exports = router;
