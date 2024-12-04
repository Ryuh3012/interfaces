import { Resend } from 'resend';

const resend = new Resend('re_123456789');

export const newPassword = async (req, res) => {

    const {email} = req?.body.user
    
    const { data, error } = await resend.emails.send({
        from: 'alejandrojmr03@gmail.com',
        to: [email],
        subject: 'Hello World',
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });

} 