'use client';
import { useState, useEffect } from "react";
import io from 'socket.io-client';

export default function Teste(props){
    const [socket, setSocket] = useState(null);
  
    useEffect(() => {
      // Inicializa o socket quando o componente monta
      const newSocket = io('http://localhost:3001');
      setSocket(newSocket);
      console.log("conectei no servidor")
      // Retorna uma função para desconectar o socket quando o componente é desmontado
      return () => newSocket.disconnect();
    }, []);

    useEffect(() => {
        // Define um ouvinte para o evento 'chat message' para atualizar as mensagens
        if (socket) {
          socket.emit('chat message', "eusoulindo");
          console.log("if do socketio")
        }
      }, [socket]);

    return (
        <>
            <h1>Teste do socket.io!!!!</h1>
        </>
    )
}
