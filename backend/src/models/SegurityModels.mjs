import { connectdb } from "../db/connectdb.mjs"

export const Securitys = async ({ preguntaUno, preguntaDos, preguntaTres, seguridadUno, seguridadDos, seguridadTres, usuario }) => {

    const query = {

        text: 'INSERT INTO preguntasdeseguridad(pregunta, repuesta,usuarioid) VALUES ($1, $2,$7 ),($3, $4,$7),($5, $6,$7) RETURNING idpreguntadeseguridad',
        values: [preguntaUno, preguntaDos, preguntaTres, seguridadUno, seguridadDos, seguridadTres, usuario]

    }
    const { rows } = await connectdb.query(query)

    return rows[0]


}
export const findOneSegurity = async ({ email }) => {


    const query = {
        text: `select usuarios.usuario ,personas.email ,preguntasdeseguridad.pregunta, preguntasdeseguridad.repuesta from preguntasdeseguridad
                inner join usuarios on preguntasdeseguridad.usuarioid = usuarios.idusuario
                inner join personas on usuarios.personaid = personas.idpersona
                where email = $1`,
        values: [email]
    }

    const { rows } = await connectdb.query(query)

    return rows[0]

}