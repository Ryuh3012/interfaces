import { connectdb } from "../db/connectdb.mjs";


export const createQuestions = async () => {


    try {
        const { rows } = await connectdb.query(`select * from paises`)
        if (rows.length > 0) return;

        const values = await Promise.all([
            connectdb.query(`create table personas(idPersona serial primary key not null,nacionalidad varchar(1),cedula char(11) unique, nombre varchar(40), apellido varchar(40), email text, paisId int);`),
            connectdb.query(`create table redesSociales(idRedesSociales serial primary key not null, redSocial varchar(19), usuario varchar(40), personaId int);`),
            connectdb.query(`create table paises(idPais serial primary key not null, pais text);`),
            connectdb.query(`create table usuarios(idUsuario serial primary key not null, usuario varchar(20), clave text, personaId int, preguntaDeSeguridadId int);`),
            connectdb.query(`create table preguntasDeSeguridad(idPreguntaDeSeguridad serial primary key not null, pregunta text, repuesta text);`),
        ])
        const key = await Promise.all([
            connectdb.query(` ALTER TABLE personas ADD FOREIGN KEY(paisId) REFERENCES paises(idPais);`),
            connectdb.query(` ALTER TABLE redesSociales ADD FOREIGN KEY(personaId) REFERENCES personas(idPersona);`),
            connectdb.query(` ALTER TABLE usuarios ADD FOREIGN KEY(personaId) REFERENCES personas(idPersona);`),
            connectdb.query(` ALTER TABLE usuarios ADD FOREIGN KEY(preguntaDeSeguridadId) REFERENCES preguntasDeSeguridad(idPreguntaDeSeguridad);`)
        ])
        console.log(values);
    } catch (error) {
        console.log(error);
    }
}

