/**
 * Database connection and crud functions
 *
 */
//"use strict";

/*
// MongoDB
var mongo = require("mongodb").MongoClient
, assert = require("assert");

// The dsn
dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/vehicles";

var mongodb = {




    async function showAll() {
        const db  = await mongo.connect(dsn);
        const col = await db.collection("bikes");
        await col.insert({brand: "Merida", gears: "Shimano", type: "mtb" });
        const res = await col.find(criteria, projection).limit(limit).toArray();
        await db.close();
        return res;
    }

}

module.exports = mongodb;
