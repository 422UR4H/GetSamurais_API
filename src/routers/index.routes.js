import { Router } from "express";
import addressRouter from "../routers/address.routes.js";
import authRouter from "../routers/auth.routes.js";

const router = Router();

router.use(addressRouter);
router.use(authRouter);

export default router;