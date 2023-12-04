import { Router } from "express";
import messagesController from "../controllers/messages";
const router = Router();

router.post("/newMessage", messagesController.newMessage);

router.post("/getMessages", messagesController.getMessagesByUser)

export default router;