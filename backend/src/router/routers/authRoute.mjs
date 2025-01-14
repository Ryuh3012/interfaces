import { Router } from "express";
import { perfiles, singIn, singUp } from "../../controllers/auth.mjs";

const route = Router()

route.post('/api/auth/singUp', singUp)
route.post('/api/auth/singIn', singIn)
route.get('/api/auth/perfil', perfiles)

export default route