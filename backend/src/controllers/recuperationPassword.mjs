import { connectdb } from "../db/connectdb.mjs";
import { transporter } from "../hooks/mailer.mjs";

export const recuperationPassword = async (req, res) => {


    const data = req?.body.user.email

    const { rows } = await connectdb.query(`select personas.email, preguntasdeseguridad.pregunta, preguntasdeseguridad.repuesta  from personas 
        inner join usuarios on usuarios.personaid = personas.idpersona
        inner join preguntasdeseguridad on preguntasdeseguridad.usuarioid = usuarios.idusuario
        where email =$1`, [data])

    if (rows.length == 0) return res.status(400).json({ messager: 'El usuario es invalido' })

    const info = await transporter.sendMail({
        from: '¿Has olvidado tu contraseña? <alejandrojmr03@gmail.com>', // sender address
        to: rows[0].email, // list of receivers
        // subject: , // Subject line
        text: "¿Has olvidado tu contraseña?", // plain text body
        html: `<b>Por favor haga clic en el siguiente enlace  para completar el proceso.<br/>
            <a href='http://localhost:5173/cambiar'>recuperar contraseña</a>
        `, // html body
    })
    res.status(200).json({ messager: 'Le Llegara Un Mensaje A Su Correo' })
}
