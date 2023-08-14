import { Router } from "express";
import { getUserByEmail, getUserByNick, getUsersCount } from "../controllers/user.controllers.js";

const router = Router();

router.get("/users/nick/:nick", getUserByNick);
router.get("/users/email/:email", getUserByEmail);
router.get("/users/count", getUsersCount);

export default router;