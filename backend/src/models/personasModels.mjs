import { connectdb } from "../db/connectdb.mjs"

export const newPersons = async (nacionalidad, cedula, nombre, fecha, apellido, email, paises) => {

    const query = {

        text: `INSERT INTO personas(nacionalidad, cedula, nombre, fechadenacimiento, apellido, email, paisid) 
        VALUES($1, $2, $3, $4, $5, $6, $7) 
        RETURNING idpersona`,
        values: [nacionalidad, cedula, nombre, fecha, apellido, email, paises]
    }

    const { rows } = await connectdb.query(query)

    return rows[0].idpersona;
}

export const findOnePerson = async (cedula) => {

    const query = {
        text: `select *from personas where cedula = $1`,
        values: [cedula]
    }

    const { rows } = await connectdb.query(query)

    return rows[0]
}

