/**
 * Connect to the database and perform CRUD.
 */
"use strict";

// MongoDB
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/bikes";



// Return a JSON object with list of all documents within the collection.
app.get("/list", async (request, response) => {
    try {
        let res = await findInCollection(dsn, "crowd", {}, {}, 0);

        console.log(res);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});



/**
 * Find documents in an collection by matching search criteria.
 *
 * @async
 *
 * @param {string} dsn        DSN to connect to database.
 * @param {string} colName    Name of collection.
 * @param {object} criteria   Search criteria.
 * @param {object} projection What to project in results.
 * @param {number} limit      Limit the number of documents to retrieve.
 *
 * @throws Error when database operation fails.
 *
 * @return {Promise<array>} The resultset as an array.
 */
async function findInCollection(dsn, colName, criteria, projection, limit) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);
    const res = await col.find(criteria, projection).limit(limit).toArray();

    await db.close();

    return res;
}


module.exports = mongo;
