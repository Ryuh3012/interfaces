import { Router } from "express";
import { singIn, singUp } from "../controllers/auth.mjs";
import { getConsul } from "../controllers/personas.mjs";

const route = Router()

route.post('/api/auth/singUp', singUp)
route.post('/api/auth/singIn', singIn)
route.get('/api/:user', getConsul)

export default route