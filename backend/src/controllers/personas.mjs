import { connectdb } from "../db/connectdb.mjs";



// export const getConsul = async (req, res) => {
//     try {
//         const { user } = req.params;

//         const { rows } = await connectdb.query(`select redessociales.redsocial, redessociales.usuario from usuarios
//         inner join personas on usuarios.personaid = personas.idpersona
//         inner join redessociales on redessociales.personaid = personas.idpersona
//         where usuarios.usuario = $1`, [user]);
//         const personas = await connectdb.query(`select personas.nombre, personas.apellido from usuarios
//         inner join personas on usuarios.personaid = personas.idpersona
//         where usuarios.usuario = $1`, [user]);


//         res.json({
//             redes: rows,
//             persona: personas.rows
//         });

//     } catch (error) {
//         console.log(error);
//     }
// };