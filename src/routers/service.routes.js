import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import validateSchema from "../middlewares/validateSchema.js";
import validateStatus from "../middlewares/validateStatus.js";
import { serviceSchema } from "../schemas/service.schemas.js";
import {
    createService,
    getServiceById,
    getServicesRank,
    getServicesByUser,
    getServicesByCategory,
    updateService,
    deleteService,
    updateServiceStatus
} from "../controllers/service.controllers.js";


const router = Router();

router.post("/services", validateAuth, validateSchema(serviceSchema), createService);
router.get("/services/rank", getServicesRank);
router.get("/services/user/:id", getServicesByUser);
router.get("/services/id/:id", getServiceById);
router.get("/services/category/:category", getServicesByCategory);
router.put("/services/:id/status/:status", validateAuth, validateStatus, updateServiceStatus);
router.put("/services", validateAuth, validateSchema(serviceSchema), updateService);
router.delete("/services", validateAuth, deleteService);

export default router;