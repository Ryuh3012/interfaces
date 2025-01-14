import express from "express";
import cors from "cors";
import { createServer } from 'http'
import { Server } from 'socket.io';

import { port } from "./src/config/config.mjs";
import { connectdb } from "./src/db/connectdb.mjs";

import index from "./src/router/index.mjs";


import { createpaises } from "./src/libs/createpaises.mjs";
import { createQuestions } from "./src/libs/createTable.mjs";


const app = express()
const server = createServer(app)
const io = new Server(server, cors({ origin: '*' }))

connectdb.connect()

app.use(cors({ origin: '*' }));
app.use(express.json());

// createQuestions()
// createpaises()

app.use(index)


io.on('connection', (client) => {

    console.log('connect');

    client.on('public', (data) => {


        client.emit('enviarPublic', data)

    })

})

server.listen(port, () => console.log(`localhost: ${port}`))