import express from 'express';
import { Request, Response } from 'express';
import messagesRouter from './src/routes/messages';
import userRouter from './src/routes/users'
import * as crypto from 'crypto';
import { createServer } from 'http';
import * as socketIO from 'socket.io';

const app = express();
const server = createServer(app);

export function hashPassword(password: string): string {
  const sha256 = crypto.createHash('sha256');
  return sha256.update(password).digest('hex');
}

app.use(express.json());
app.set('view engine', 'ejs');

// Configuração CORS para o Express
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Substitua pelo URL do seu frontend
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Rotas
app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Eu sou lindo na requisição base");
});

app.use("/messages", messagesRouter);
app.use("/users", userRouter);

// Configuração CORS para o Socket.IO
const io = new socketIO.Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Substitua pelo URL do seu frontend
    methods: ['GET', 'POST'],
    credentials: true,
  }
});

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  // Lógica para lidar com mensagens do cliente
  socket.on('chat message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
    // io.emit('chat message', message);  // Emite a mensagem para todos os clientes conectados
  });

  // Lógica para lidar com desconexões
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(3001, () => {
  console.log('Servidor ouvindo na porta 3001');
});
