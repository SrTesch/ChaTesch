import { Router } from "express";
import messagesController from "../controllers/messages";
const router = Router();

//here I subdividing the routes for each action related to messages
router.post("/newMessage", messagesController.newMessage);

router.post("/getMessages", messagesController.getMessagesByUser)

export default router;