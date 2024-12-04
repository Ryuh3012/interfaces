import { connectdb } from "../db/connectdb.mjs";


export const createpaises = async () => {


    try {
        const { rows } = await connectdb.query(`select * from paises`)
        if (rows.length > 0) return;

        const values = await Promise.all([
            connectdb.query(`INSERT INTO paises(pais) VALUES ('Argentina'), ('Bolivia'),('Brasil'), ('Chile'), ('Colombia'),('Ecuador'),('Guyana'),('Perú'),('Surinam'), ('Uruguay');`),
        ])
        console.log(values);
    } catch (error) {
        console.log(error);
    }
}










