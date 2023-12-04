import { pool } from '../config/database';
import { Message } from '../models/messages';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

const messagesService = {
  newMessage: async (text: string, sender_user: string, receiver_user: string, image: string, message_dt: Date) => {
    try {
      const connection = await pool.getConnection();
  
      const [result] = await connection.query<ResultSetHeader>(
        'INSERT INTO messages (id_message, text, sender_user, receiver_user, image, message_dt) VALUES (null, ?, ?, ?, ?, ?)',
        [text, sender_user, receiver_user, image, message_dt]
      );
  
      connection.release();
  
      return { id: result.insertId, text, sender_user, receiver_user, image, message_dt };
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao criar mensagem');
    }
  },
  getMessagesByUsers: async (user1: string, user2: string) => {
    try {
      const connection = await pool.getConnection();

      const [rows] = await connection.query('select * from messages where sender_user = ? and receiver_user = ? or sender_user = ? and receiver_user = ?;', [user1, user2, user2, user1]);

      connection.release();

      return rows as Message[];
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao buscar mensagens do usuário');
    }
  },
};

export default messagesService;
