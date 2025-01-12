import { generateToken, verifyToken } from "../hooks/generToken.mjs";

export const verifytokenMiddleware = async (req, res, next) => {

    const token = req?.headers['authorization']
    try {


        if (!token) return res.status(401).json({ messager: 'Acceso denegado' })

        const { valid, expired, decoded } = verifyToken(token)

        if (expired) return res.status(401).json({ msg: 'Su tiempo de autenticacion ha acabado' })

        if (!valid) return res.status(401).json({ msg: 'Su tiempo de autenticacion ha acabado' })

        req.cedula = decoded.cedula
        next()
    } catch (error) {
        console.log(error);
    }
}

