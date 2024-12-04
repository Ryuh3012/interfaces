import { Router } from "express";
import { getPaises } from "../controllers/paisesController.mjs";

const route = Router()

route.get('/paises', getPaises)
export default route
