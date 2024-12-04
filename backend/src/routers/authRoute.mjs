import { Router } from "express";
import { singUp } from "../controllers/auth.mjs";

const route = Router()

route.post('/api/auth', singUp)

export default route