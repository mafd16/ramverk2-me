var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// MongoDB
//const mongodb = require('../src/database/mongodb.js');

// The routes //

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

/* GET chatt page. */
router.get('/chatt', function(req, res) {
    res.render('chatt', { title: 'Martins chatt' });
});

/* GET database page. */
router.get('/crud', async (req, res) => {
    // MongoDB
    var mongo = require("mongodb").MongoClient;
    // The dsn
    dsn =  process.env.DBWEBB_DSN || "mongodb://mongodb_redovisa:27017/vehicles";

    try {
        const db  = await mongo.connect(dsn);
        const col = await db.collection("bikes");
        const result = await col.find().toArray();
        await db.close();

        res.render('crud', { title: 'Databas', message: result });
    } catch (err) {
        console.log(err);
        res.render('crud', { title: 'Databas', data: err });
    }
});

/* Database page, POST new bike. */
router.post('/crud/add', async (req, res) => {
    // MongoDB
    var mongo = require("mongodb").MongoClient;
    // The dsn
    dsn =  process.env.DBWEBB_DSN || "mongodb://mongodb_redovisa:27017/vehicles";
    // The posted bike (POST variables)
    var newBrand = req.body.brand,
        newGears = req.body.gears,
        newType  = req.body.type;

    console.log("New bike: " + newBrand + ", " + newGears + ", " + newType);

    try {
        const db  = await mongo.connect(dsn);
        const col = await db.collection("bikes");
        await col.insertOne({brand: newBrand, gears: newGears, type: newType });
        const result = await col.find().toArray();
        await db.close();

        res.render('crud', { title: 'Databas', message: result });
    } catch (err) {
        console.log(err);
        res.render('crud', { title: 'Databas', data: err });
    }
});

module.exports = router;
