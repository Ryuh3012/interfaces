import { Router } from "express";

import authRoute from "./routers/authRoute.mjs";
import paisRoute from "./routers/paisesRoute.mjs";
import updatePassword from "./routers/recuperationPassword.mjs";
const router = Router();

router.use(authRoute)
router.use(paisRoute)
router.use(updatePassword)

export default router;

