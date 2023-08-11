import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { authSchema } from "../schemas/auth.schemas.js";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { accountSchema } from "../schemas/account.schemas.js";

const router = Router();

router.post("/sign-up", validateSchema(accountSchema), signUp);
router.post("/sign-in", validateSchema(authSchema), signIn);

export default router;