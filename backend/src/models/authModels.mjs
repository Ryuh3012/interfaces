import { query, text } from "express"
import { connectdb } from "../db/connectdb.mjs"

export const newAuths = async ({ usuario, clave, persona }) => {

    const query = {

        text: `INSERT INTO usuarios(usuario, clave, personaid ) VALUES ($1,$2,$3) RETURNING idusuario`,

        value: [usuario, clave, persona]
    }
    const { rows } = await connectdb.query(query)

    return rows[0].idusuario

}

export const findOneAuth = async ({ usuario }) => {

    const query = {
        text: 'sele * from usuarios where usuario = $1',
        value: [usuario]
    }

    const { rows } = await connectdb.query(query)

    return rows[0]

}

