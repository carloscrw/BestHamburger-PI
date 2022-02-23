var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
router.get('/cadastro', usuarioController.cadastro)
router.get('/login', usuarioController.login)
router.get('/cardapio', usuarioController.cardapio)

=======
>>>>>>> 28f5ae0e0cb452903ef0b97caf2c54408a5ec5c7
module.exports = router;