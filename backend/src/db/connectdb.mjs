import pkg from "pg";
const { Pool } = pkg;

export const connectdb = new Pool({
    host: "localhost",
    user: "postgres",
    password: "0000",
    database: "usuario",
    port: "5432",
});


