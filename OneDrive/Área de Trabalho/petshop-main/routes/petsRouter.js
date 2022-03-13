var express = require('express');
var router = express.Router();
const petsController = require("../controller/petsController")

router.post('/cadastrapet', petsController.cadastraPets)
router.get('/pets',petsController.listaPets)

module.exports = router