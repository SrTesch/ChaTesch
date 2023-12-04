import express from 'express';
import { Request, Response } from 'express'; // Adicionando essa linha
// import cors from 'cors';
import messagesRouter from './src/routes/messages';

const app = express();

// app.use(cors())
app.use(express.json())
app.set('view engine', 'ejs');


app.get("/", (req: Request, res: Response) =>{
    res.status(200).json("Eu sou lindo em todas as requisições");
})

app.use("/messages", messagesRouter);


app.listen(3001, () =>{
    console.log("Eu sou lindo");
})