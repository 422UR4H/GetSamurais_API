import { Router } from "express";
import addressRouter from "../routers/address.routes.js";

const router = Router();

router.use(addressRouter);

export default router;