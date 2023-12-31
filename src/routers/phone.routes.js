import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import validateSchema from "../middlewares/validateSchema.js";
import { phoneSchema } from "../schemas/phone.schemas.js";
import {
    createPhone,
    getPhonesByUser,
    updatePhone,
    deletePhone
} from "../controllers/phone.controllers.js";

const router = Router();

router.post("/phones", validateAuth, validateSchema(phoneSchema), createPhone);
router.get("/phones/:id", getPhonesByUser);
router.put("/phones", validateAuth, validateSchema(phoneSchema), updatePhone);
router.delete("/phones", validateAuth, deletePhone);

export default router;