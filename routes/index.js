var express = require('express');
var router = express.Router();


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
        //await col.insert({brand: "Merida", gears: "Shimano", type: "mtb" });
        const result = await col.find().toArray();
        await db.close();
        //res.json(result);
        result2 = [];
        for (var i = 0; i < result.length; i++) {
            var k = 0;
            for (var j = 0; j < result[i].length; j++) {
                if (k >= 1) {
                    result2.push(result[i][j]);
                }

            }

        }
        console.log("Result: " + result);
        //res.json(result);
        result2 = JSON.stringify(result);
        res.render('crud', { title: 'Databas', message: result });
    } catch (err) {
        console.log(err);
        //response.json(err);
        res.render('crud', { title: 'Databas', data: err });
    }
});


module.exports = router;
