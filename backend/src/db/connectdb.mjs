import pkg from "pg";
import { dataBase, host, pass, por, user } from "../config/config.mjs";
const { Pool } = pkg;

export const connectdb = new Pool({
    host: host,
    user: user,
    password: pass,
    database: dataBase,
    port: por,
});


