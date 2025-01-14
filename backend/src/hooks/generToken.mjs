import jwt from 'jsonwebtoken'
import { tokenPassword } from '../config/config.mjs';


export const generateToken = async ({ cedula, rol, expires }) => {

    try {
        return jwt.sign({ cedula, rol }, tokenPassword, { expiresIn: expires });
    } catch (error) {
        console.log(error);
    }
}

export const verifyToken = (token) => {
    try {

        const decoded = jwt.verify(token, tokenPassword)
        return { valid: true, expired: false, decoded }

    } catch (error) {
        console.error(error);
        return { valid: false, expired: error.message === 'jwt expired' }
    }

}