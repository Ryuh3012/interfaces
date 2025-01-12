import nodemailer from "nodemailer";
import { passwordAuth } from "../config/config.mjs";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: "alejandrojmr03@gmail.com",
        pass: passwordAuth,
    },
});

