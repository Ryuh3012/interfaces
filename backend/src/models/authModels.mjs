import { query, text } from "express"
import { connectdb } from "../db/connectdb.mjs"

export const newAuths = async ({ usuario, clave, persona, rol }) => {

    const query = {

        text: 'INSERT INTO usuarios(usuario, clave, personaid, rolid ) VALUES ($1, $2, $3, $4) RETURNING idusuario',

        values: [usuario, clave, persona, rol]
    }
    const { rows } = await connectdb.query(query)

    return rows[0].idusuario

}

export const findOneAuth = async ({ usuario, cedula }) => {
    const query = {
        text: `select usuarios.usuario, usuarios.clave, roles.rol from usuarios 
        inner join personas on usuarios.personaid = personas.idpersona
        inner join roles on usuarios.rolid = roles.idrol
        where usuarios.usuario = $1 or personas.cedula = $2`,
        values: [usuario, cedula]
    }

    const { rows } = await connectdb.query(query)

    return rows[0]

}

export const updatePassword = async ({ newPassword, usuario }) => {

    const query = {
        text: `UPDATE usuarios
	            SET clave=$1
            WHERE usuario = $2; `,
        values: [newPassword, usuario]


    }
    const { rows } = await connectdb.query(query)

    return rows[0]
}

export const getAuths = () => {

    const query = {
        text: `SELECT usuarios.usuario, roles.rol FROM usuarios
        inner join roles on usuarios.rolid = roles.idrol`,
    }
    return connectdb.query(query)

} 