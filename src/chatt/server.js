/**
 * Server using websockets and express supporting broadcase and echo
 * through use of subprotocols.
 */
"use strict";

const port = process.env.DBWEBB_PORT || 1337;
const express = require("express");
const http = require("http");
//const url = require("url");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({
    server: server,
    clientTracking: true, // keep track on connected clients,
    handleProtocols: handleProtocols // Manage what subprotocol to use.
});

//var util = require('util');

/**
 * Global vars
 */
//var history = [];
//var users = [];
//const broadcast = {};

// For checking connection alive
function heartbeat() {
    this.isAlive = true;
}



// Answer on all http requests
app.use(function (req, res) {
    console.log("HTTP request on " + req.url);
    res.send({ msg: "hello" });
});



/**
 * Select subprotocol to use for connection.
 *
 * @param {Array} protocols              Subprotocols to choose from, sent
 *                                        by client request.
 * @param {http.IncomingMessage} request The client HTTP GET request.
 *
 * @return {void}
 */
function handleProtocols(protocols /*, request */) {
    console.log(`Incoming protocol requests '${protocols}'.`);
    for (var i=0; i < protocols.length; i++) {
        if (protocols[i] === "text") {
            return "text";
        } else if (protocols[i] === "json") {
            return "json";
        }
    }
    return false;
}



/**
 * Broadcast data to everyone except one self (ws).
 *
 * @param {WebSocket} ws   The current websocket.
 * @param {string}    data The data to send.
 *
 * @return {void}
 */
function broadcastExcept(ws, data, type, nickname) {
    let clients = 0;

    console.log("in broad.exc: data: " + data);
    console.log("in broad.exc: type: " + type);
    console.log("in broad.exc: nickname: " + nickname);

    wss.clients.forEach((client) => {
        //console.log(client);
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            clients++;
            if (ws.protocol === "json") {
                let msg = {
                    timestamp: Date(),
                    data: data,
                    type: type,
                    nickname: nickname
                };

                client.send(JSON.stringify(msg));
            } else {
                client.send(data);
            }
        }
    });
    console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
}



// Setup for websocket requests.
// Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
wss.on("connection", (ws/*, req*/) => {
    console.log("Connection received. Adding client.");

    //var users = [];
    // Add clients with names to list
    //var index = users.push(ws) - 1;
    var nickname = false;
    //ws.nickname = false;


    // send back chat history
    /*if (history.length > 0) {
        ws.send(JSON.stringify({ type: 'history', data: history} ));
    }*/



    // For checking connection alive
    ws.isAlive = true;
    ws.on("pong", heartbeat);

    //broadcastExcept(ws, `New client connected (${wss.clients.size}) using '${ws.protocol}'.`);
    //console.log(ws);

    ws.on("message", (message) => {
        console.log("Received: %s", message);
        let msg = JSON.parse(message);

        if (nickname == false) {
            // Save nickname
            nickname = msg.nickname;
            console.log('User ' + nickname + ' connected.');

            broadcastExcept(ws, msg.message, msg.type, nickname);
        } else {
            //let nameAndMessage = msg.nickname + ": " + msg.message;
            //broadcastExcept(ws, nameAndMessage);
            broadcastExcept(ws, msg.message, msg.type, nickname);
        }

        /*if (msg.getUsers) {
            sendBackUsers(ws, users);
        }*/




        // Keep history of messages
        /*var obj = {
            time: Date(),
            text: message,
            nickname: nickname
        };
        history.push(obj);
        history = history.slice(-100);*/
    });

    ws.on("error", (error) => {
        console.log(`Server error: ${error}`);
    });

    ws.on("close", (code, reason) => {
        console.log(`Closing connection: ${code} ${reason}`);
        //broadcastExcept(ws, `Client disconnected (${wss.clients.size}).`);

        // Remove user from list
        //users.splice(index, 1);
    });
});

// For checking connection alive
const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        if (ws.isAlive === false) {
            return ws.terminate();
        }

        ws.isAlive = false;
        ws.ping('', false, true);
    });
}, 30000);



// Startup server
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
