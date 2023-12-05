import { Router } from "express";
import userController from "../controllers/users";

const router = Router();

router.post("/register", userController.newUser);

router.post("/login", userController.login);

export default router;
