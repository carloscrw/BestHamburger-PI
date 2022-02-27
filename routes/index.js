var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});




module.exports = router;