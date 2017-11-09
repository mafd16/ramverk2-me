var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Martins Me-sida' });
});

/* GET about page. */
router.get('/about', function(req, res) {
    res.render('about', { title: 'Om Ramverk2' });
});

/* GET report page. */
router.get('/report', function(req, res) {
    res.render('report', { title: 'Rapporter' });
});

/* GET nim page. */
router.get('/nim', function(req, res) {
    res.render('nim', { title: 'Spela Nim' });
});

/* GET nim play page. */
router.get('/playnim', function(req, res) {
    res.render('playnim', { title: 'Spela Nim' });
});

module.exports = router;
