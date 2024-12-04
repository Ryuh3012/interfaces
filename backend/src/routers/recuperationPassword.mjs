import { Router } from "express";
import { newPassword, RecupererPassword } from "../controllers/RecuperationPassword.mjs";


const route = Router()

route.post('/recuperar', RecupererPassword)
route.post('/clave', newPassword)

export default route
