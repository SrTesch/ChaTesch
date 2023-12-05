import express from 'express';
import { Request, Response } from 'express';
import messagesRouter from './src/routes/messages';
import userRouter from './src/routes/users'
import * as crypto from 'crypto';

const app = express();

export function hashPassword(password: string): string {
    const sha256 = crypto.createHash('sha256');
    return sha256.update(password).digest('hex');
}

app.use(express.json())
app.set('view engine', 'ejs');

//In this file, I'm dividing the routes between "/messages" and "/user", who is calleds and subdivideds by routes

app.get("/", (req: Request, res: Response) =>{
    res.status(200).json("Eu sou lindo em todas as requisições");
});

app.use("/messages", messagesRouter);

app.use("/users", userRouter);

app.listen(3001, () =>{
    console.log("Eu sou lindo");
})