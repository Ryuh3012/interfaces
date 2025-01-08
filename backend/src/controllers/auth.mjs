import { encryptionComparison, encryptions } from "../libs/cryter.mjs";

import { findOneAuth, newAuths } from "../models/authModels.mjs";
import { findOnePerson, newPersons } from "../models/personasModels.mjs";
import { redes } from "../models/redSocialModels.mjs";
import { Securitys } from "../models/SegurityModels.mjs";

export const singUp = async (req, res) => {
    const { cedula, nombre, apellido, email, nacionalidad, fecha, pais, usuario, clave, preguntaUno, preguntaDos, preguntaTres, seguridadUno, seguridadDos, seguridadTres, facebook, instagram, x, tikTok } = req?.body
    const paises = pais.length === 0 ? null : pais

    try {

        const getPerson = await findOnePerson(cedula)

        if (getPerson) return res.status(401).json({ messager: 'La persona ya existe' })

        const newPerson = await newPersons(nacionalidad, cedula, nombre, fecha, apellido, email, paises)

        const getAuth = await findOneAuth(usuario)

        if (getAuth) return res.status(4001).json({ messager: 'El usuario ya existe' })

        const encryption = await encryptions(clave)
        const newAuth = await newAuths({ usuario, clave: encryption, persona: newPerson })

        let red;
        if (facebook && instagram && x && tikTok) {
            red = await redes({ facebook, instagram, x, tikTok, persona: newPerson })

        }

        const security = await Securitys({ preguntaUno, preguntaDos, preguntaTres, seguridadUno, seguridadDos, seguridadTres, usuario: newAuth })

        return res.status(200).json({ messager: 'El Usuario Se Ha Creado Correctamente' })


    } catch (error) {
        console.error('Error during signUp:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}

export const singIn = async (req, res) => {

    const { usuario, clave } = req?.body.user
    try {

        const getAuth = await findOneAuth(usuario)

        if (getAuth.length == 0) return res.status(400).json({ messager: 'Usuario o clave inválidos' })

        const matChPassword = await encryptionComparison(clave, getAuth.clave)

        if (!matChPassword) return res.status(400).json({ messager: 'Usuario o clave inválidos' })


        res.status(200).json({ messager: 'Usuario Válido', user: getAuth.usuario })


    } catch (error) {
        console.error('Error during signUp:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }


}