import { Router } from "express";
import { recuperationPassword } from "../controllers/recuperationPassword.mjs";


const route = Router()

route.post('/api/password/recuperar', recuperationPassword)
// route.post('/api/password/newPassowrd', newPassword)

export default route
