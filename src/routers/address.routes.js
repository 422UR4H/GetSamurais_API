import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import validateSchema from "../middlewares/validateSchema.js";
import { addressSchema } from "../schemas/address.schemas.js";
import {
    createAddress,
    getAddress,
    getAddressesByUser,
    updateAddress,
    deleteAddress
} from "../controllers/address.controllers.js";

const router = Router();

router.post("/address", validateAuth, validateSchema(addressSchema), createAddress);
router.get("/address/:cep", getAddress);
router.get("/addresses/user/:id", getAddressesByUser);
router.put("/address", validateAuth, validateSchema(addressSchema), updateAddress);
router.delete("/address", validateAuth, deleteAddress);

export default router;