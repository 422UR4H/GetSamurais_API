import { Router } from "express";
import addressRouter from "../routers/address.routes.js";
import authRouter from "../routers/auth.routes.js";
import categoryRouter from "../routers/category.routes.js";
import commentRouter from "../routers/comment.routes.js";
import feedbackRouter from "../routers/feedback.routes.js";
import phoneRouter from "../routers/phone.routes.js";
import serviceRouter from "../routers/service.routes.js";

const router = Router();

router.use(addressRouter);
router.use(authRouter);
router.use(categoryRouter);
router.use(commentRouter);
router.use(feedbackRouter);
router.use(phoneRouter);
router.use(serviceRouter);

export default router;