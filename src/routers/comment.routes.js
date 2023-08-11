import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import validateSchema from "../middlewares/validateSchema.js";
import { commentSchema } from "../schemas/comment.schemas.js";
import {
    createComment,
    getCommentsByFeedback,
    getCommentsByUser,
    updateComment,
    deleteComment
} from "../controllers/comments.controllers.js";


const router = Router();

router.post("/comments", validateAuth, validateSchema(commentSchema), createComment);
router.get("/comments/feedback/:id", getCommentsByFeedback);
router.get("/comments/user/:id", validateAuth, getCommentsByUser);
router.put("/comments", validateAuth, validateSchema(commentSchema), updateComment);
router.delete("/comments", validateAuth, deleteComment);

export default router;