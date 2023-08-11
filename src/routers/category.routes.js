import { Router } from "express";
import {
    getCategory,
    postCategory
} from "../controllers/category.controllers.js";


const router = Router();

router.get("/categories", getCategory);
router.post("/categories", postCategory);

export default router;