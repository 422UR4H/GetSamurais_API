import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import validateSchema from "../middlewares/validateSchema.js";
import validateStatus from "../middlewares/validateStatus.js";
import { serviceAndCategorySchema } from "../schemas/serviceAndCategory.schemas.js";
import {
    createService,
    getServiceById,
    getServicesRank,
    getServicesByUser,
    getServicesByCategory,
    updateService,
    deleteService,
    updateServiceStatus,
    getAllServices,
    getServicesCount,
    getServicesAllInfo
} from "../controllers/service.controllers.js";
import validateCategories from "../middlewares/validateCategories.js";


const router = Router();

router.post("/services", validateAuth, validateCategories, validateSchema(serviceAndCategorySchema), createService);
router.get("/services", getAllServices);
router.get("/services/rank", getServicesRank);
router.get("/services/user/:id", getServicesByUser);
router.get("/services/id/:id", getServiceById);
router.get("/services/category/:category", getServicesByCategory);
router.get("/services/count", getServicesCount);
router.get("/services/:id/all-info", getServicesAllInfo);
router.put("/services/:id/status/:status", validateAuth, validateStatus, updateServiceStatus);
router.put("/services/:id", validateAuth, validateCategories, validateSchema(serviceAndCategorySchema), updateService);
router.delete("/services", validateAuth, deleteService);

export default router;