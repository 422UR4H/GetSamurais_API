import { Router } from "express";
import {
    getComments,
    postComment
} from "../controllers/comments.controllers.js";


const router = Router();

router.get("/comments", getComments);
router.post("/comments", postComment);

export default router;