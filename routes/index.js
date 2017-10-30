var express = require('express');
var router = express.Router();
var height = window.innerHeight;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Martins Me-sida' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Om Ramverk2' });
});

/* GET report page. */
router.get('/report', function(req, res, next) {
  res.render('report', { title: 'Rapporter' });
});

module.exports = router;
