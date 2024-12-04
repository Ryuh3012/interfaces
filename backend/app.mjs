import express from "express";
import cors from "cors";

import { port } from "./src/config/config.mjs";

import { connectdb } from "./src/db/connectdb.mjs";

import authRouter from "./src/routers/authRoute.mjs"
import paisesRouter from "./src/routers/paisesRoute.mjs"
import newPassword from "./src/routers/recuperationPassword.mjs"
import { createpaises } from "./src/libs/createpaises.mjs";
;

const app = express()

app.use(cors({ origin: '*' }));
app.use(express.json());
// connectdb.connect()
// createpaises()

app.use(authRouter)
app.use(paisesRouter)
app.use(newPassword)


app.listen(port, () => {

    console.log('serve listo :3');

})