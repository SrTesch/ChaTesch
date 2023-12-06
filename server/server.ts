import express from 'express';
import { Request, Response } from 'express';
import messagesRouter from './src/routes/messages';
import userRouter from './src/routes/users'
import * as crypto from 'crypto';
import { createServer, Server } from 'http';
import * as socketIO from 'socket.io';

const app = express();
const server = createServer(app);
const io = new socketIO.Server(server);

io.on('connection', (socket) => {
    console.log('Novo cliente conectado');
  
    // Lógica para lidar com mensagens do cliente
    socket.on('chat message', (message) => {
      console.log(`Mensagem recebida: ${message}`);
      io.emit('chat message', message);  // Emite a mensagem para todos os clientes conectados
    });
  
    // Lógica para lidar com desconexões
    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
  


export function hashPassword(password: string): string {
    const sha256 = crypto.createHash('sha256');
    return sha256.update(password).digest('hex');
}


app.use(express.json())
app.set('view engine', 'ejs');

//In this file, I'm dividing the routes between "/messages" and "/user", who is called and subdivided by routers

app.get("/", (req: Request, res: Response) =>{
    res.status(200).json("Eu sou lindo na requisição base");
});

app.use("/messages", messagesRouter);

app.use("/users", userRouter);

server.listen(3001, () => {
    console.log('Servidor ouvindo na porta 3001');
});