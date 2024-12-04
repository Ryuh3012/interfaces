import { connectdb } from "../db/connectdb.mjs";
import { encryption, encryptionComparison } from "../libs/cryter.mjs";

export const singUp = async (req, res) => {
    const { cedula, nombre, apellido, email, nacionalidad, fecha, pais, usuario, clave, preguntaUno, preguntaDos, preguntaTres, seguridadUno, seguridadDos, seguridadTres, facebook, instagram, x, tikTok } = req?.body.data

    const paises = pais.length == 0 ? null : pais
    try {
        const { rows: { idpersona } } = await connectdb.query('INSERT INTO personas(nacionalidad, cedula, nombre, fechadenacimiento, apellido, email, paisid) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING idpersona', [nacionalidad, cedula, nombre, fecha, apellido, email, paises])
        console.log(idpersona);

        const redSocial = await connectdb.query(`INSERT INTO redessociales(redsocial, usuario, personaid) values('facebook', $1, $5), ('instagra', $2,$5), ('x (Antiguo twitter)',$3,$5),('tiktok', $4,$5)`, [facebook, instagram, x, tikTok, idpersona])

        const { rows: { idpreguntadeseguridad } } = await connectdb.query('INSERT INTO preguntasdeseguridad(pregunta, repuesta) VALUES ($1, $2 ),($3, $4 ),($5, $6) RETURNING idpreguntadeseguridad', [preguntaUno, seguridadUno, preguntaDos, seguridadDos, preguntaTres, seguridadTres])

        const newData = await connectdb.query('INSERT INTO usuarios(usuario, clave, personaid, preguntadeseguridadid) VALUES ($1,$2,$3,$4)', [usuario, await encryption(clave), idpersona, idpreguntadeseguridad])

        return res.status(200).json({ messager: 'El Usuario Se Ha Creado Correctamente' })


    } catch (error) {
        console.log(error);
    }
}

export const singIn = async (req, res) => {

    const { usuario, clave } = req?.body.user
    try {

        const { rows } = await connectdb.query('select usuario, clave from usuarios where usuario = $1', [usuario])
        if (rows.length == 0) return res.status(400).json({ messager: 'Usuario o clave invalidos' })
        console.log(rows[0].clave);
        const matChPassword = await encryptionComparison(clave, rows[0].clave)
        if (!matChPassword) return res.status(400).json({ messager: 'Usuario o clave invalidos' })
        console.log(matChPassword);
        res.status(200).json({ messager: 'Usuario Valido', user: rows[0].usuario })


    } catch (error) {
        console.log(error);
    }


}