import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js";
import validateSchema from "../middlewares/validateSchema.js";
import { feedbackSchema } from "../schemas/feedback.schemas.js";
import {
    createFeedback,
    getFeedbackByService,
    getFeedbackByUser,
    getFeedbacksRank,
    updateFeedback,
    deleteFeedback
} from "../controllers/feedback.controllers.js";


const router = Router();

router.post("/feedbacks", validateAuth, validateSchema(feedbackSchema), createFeedback);
router.get("/feedbacks/rank", getFeedbacksRank);
router.get("/feedbacks/service/:id", getFeedbackByService);
router.get("/feedbacks/user/:id", validateAuth, getFeedbackByUser);
router.put("/feedbacks", validateAuth, validateSchema(feedbackSchema), updateFeedback);
router.delete("/feedbacks", validateAuth, deleteFeedback);

export default router;