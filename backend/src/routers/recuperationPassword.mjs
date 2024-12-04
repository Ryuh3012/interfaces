import { Router } from "express";
import { newPassword } from "../controllers/RecuperationPassword.mjs";


const route = Router()

route.post('/recuperar', newPassword)
export default route
