import { Resend } from 'resend';

const resend = new Resend('re_PWWmusNE_HsR8uiwLeHN62Qpi5agRNg6k');

export const RecupererPassword = async (req, res) => {
    const { email } = req?.body.user

    const resend = new Resend('re_PWWmusNE_HsR8uiwLeHN62Qpi5agRNg6k');

    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Hello World2',
        html: '<p>http://localhost:5173/cambiar</p>'
    });;
    if (error) {
        return console.error({ error });
    }

    return res.status(200).json({
        messager: "Le llegare un Mensaje al correo",
        resp: email
    });

}
export const newPassword = async (req, res) => {
    const { value:{newClave}, user } = req?.body.user

    try {
        const { rows } = await connectdb.query("update usuarios set clave=$1 where nombre= $2", [newClave,user]);
        return res.status(200).json({
            messager: rows
        });
    } catch (error) {
        console.log(error);
    }


}