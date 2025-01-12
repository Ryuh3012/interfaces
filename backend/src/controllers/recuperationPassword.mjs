import { encryptions } from "../hooks/cryter.mjs";
import { generateToken } from "../hooks/generToken.mjs";
import { transporter } from "../hooks/mailer.mjs";
import { findOneAuth, updatePassword } from "../models/authModels.mjs";
import { findOnePerson } from "../models/personasModels.mjs";

export const recoverPassword = async (req, res) => {

    const { email } = req?.params
    try {
        const user = await findOnePerson({ email })


        if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

        const token = generateToken({ cedula: user.cedula, expires: '1h' })

        const info = await transporter.sendMail({
            from: '¿Has olvidado tu contraseña? <alejandrojmr03@gmail.com>', // sender address
            to: user.email, // list of receivers
            // subject: , // Subject line
            text: "¿Has olvidado tu contraseña?", // plain text body
            html: ` <div style="max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;">
        <div style=" text-align: center;
            margin-bottom: 20px;">
            <h1>Recuperación de Contraseña</h1>
        </div>
        <div style= 'text-align: center;'>
            <p>Hola ${user.nombre},</p>
            <p>Hemos recibido una solicitud para restablecer tu contraseña. Si no fuiste tú, ignora este correo.</p>
            <p>Para restablecer tu contraseña, haz clic en el siguiente botón:</p>
            <a href="http://localhost:5173/cambiar" style="background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;">Restablecer Contraseña</a>
        </div>
        <div style="text-align: center;
            font-size: 12px;">
            <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
        </div>
        </div>`, // html body
        })
        return res.status(200).json({
            msg: 'Correo de recuperación enviado',
            token: await token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al recuperar la contraseña' });
    }

}


export const resetPassword = async (req, res) => {

    const { newPassword: password } = req?.body;

    const user = await findOneAuth({ cedula: req.cedula })
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const hash = await encryptions(password)

    const passwordUpdate = await updatePassword({ newPassword: password, usuario: user.usuario })

    return res.status(200).json({ msg: 'Su contraseña ha sido actualizada' });
}