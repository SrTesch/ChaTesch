import { Request, Response } from 'express';
import messagesService from '../services/messages';

const messagesController = {
  newMessage: async (req: Request, res: Response) => {
    try {
      const { text, sender_user, receiver_user, image } = req.body;
      
      const message_dt: Date = new Date();
      console.log("message_dt: ", message_dt);
      
      const newMessage = await messagesService.newMessage(text, sender_user, receiver_user, image, message_dt);

      res.status(201).json(newMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getMessagesByUser: async (req: Request, res: Response) =>{
    try{
        const {user1, user2} = req.body;
        const messages = await messagesService.getMessagesByUsers(user1, user2);
        res.status(200).json(messages)
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Unfortunately you get an error to get messages! Try again later!"})
    }
  }
};

export default messagesController;
