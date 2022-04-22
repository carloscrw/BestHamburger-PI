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


module.exports = router;