import { pool } from '../config/database';
import { User } from '../models/users'
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { hashPassword } from '../../server';

const usersServices = {
    newUser: async (user: User)=>{
        try{
            const conn = await pool.getConnection();
            const hashedPassword = hashPassword(user.password);
            const [result] = await conn.query<ResultSetHeader>('insert into users (user, email, password, profile_photo) values (?, ?, ?, ?)', [user.user, user.email, hashedPassword, user.profile_photo]);

            conn.release();
            return {result};
        }catch(error){
            console.log(error)
            throw new Error(`Erro ao cadastrar novo usuário! Verifique os dados e tente novamente.`);
        }
    },
    login: async (user: User)=>{
        try{
            const conn = await pool.getConnection();

            const hashedPassword = hashPassword(user.password);

            const [rows] = await conn.query<RowDataPacket[]>(
                'SELECT * FROM users WHERE email = ? AND password = ?',
                [user.email, hashedPassword]
              );
          
              if (rows.length === 1) {
                console.log('Login successful');
                // jwt goes here!!!
              } else {
                console.log('Invalid credentials');
                throw new Error('Invalid credentials');
              }
        }catch(error){
            console.log(error)
            throw new Error(`Erro ao logar`);
        }
    }
}

export default usersServices