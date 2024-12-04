import { Router } from "express";
import { singIn, singUp } from "../controllers/auth.mjs";

const route = Router()

route.post('/api/auth/singUp', singUp)
route.post('/api/auth/singIn', singIn)

export default route