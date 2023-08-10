import { Router } from "express";
import { getAddress } from "../controllers/address.controllers.js";

const router = Router();

router.get("/address/:cep", getAddress);

export default router;