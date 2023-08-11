import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import validateSchema from "../middlewares/validateSchema.js";
import { serviceSchema } from "../schemas/service.schemas.js";
import {
    createService,
    getServiceById,
    getServicesRank,
    getServicesByCategory,
    updateService,
    deleteService
} from "../controllers/service.controllers.js";


const router = Router();

router.post("/services", validateAuth, validateSchema(serviceSchema), createService);
router.get("/services/id/:id", getServiceById);
router.get("/services/rank", getServicesRank);
router.get("/services/category/:category", getServicesByCategory);
router.put("/services", validateAuth, validateSchema(serviceSchema), updateService);
router.delete("/services", validateAuth, deleteService);

export default router;