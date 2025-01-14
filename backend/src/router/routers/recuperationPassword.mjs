import { Router } from "express";
import { recoverPassword, resetPassword } from "../../controllers/recuperationPassword.mjs";
import { verifytokenMiddleware } from "../../middlewares/verifyTokenMilddleware.mjs";


const route = Router()

route.post('/renover/:email', recoverPassword)
route.put('/reset-passowrd', [verifytokenMiddleware, resetPassword])

export default route
