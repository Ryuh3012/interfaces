import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: "alejandrojmr03@gmail.com",
        pass: "ezem uazu azcv cyfg",
    },
});

transporter.verify(()=>{

    console.log('ready for send emails');
})