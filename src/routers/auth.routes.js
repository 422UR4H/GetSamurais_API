import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/user.schemas.js";
import { authSchema } from "../schemas/auth.schemas.js";
import { signIn, signUp } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/sign-up", validateSchema(userSchema), signUp);
router.post("/sign-in", validateSchema(authSchema), signIn);

export default router;