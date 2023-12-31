import { pool } from '../config/database';
import { User } from '../models/users'
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { hashPassword } from '../../server';
import { generateToken } from '../utils/jwt';
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
    verifyEmail: async (email: string) =>{
        const conn = await pool.getConnection();
        const [verifiedEmail] = await conn.query<RowDataPacket[]>("select * from users where email = ?", [email]);
        conn.release();
        if(verifiedEmail.length === 0)
            return verifiedEmail;
        else
            return null;

    },
    login: async (user: User) => {
        try {
            const conn = await pool.getConnection();


            const [rows] = await conn.query<RowDataPacket[]>(
                'SELECT * FROM users WHERE email = ?',
                [user.email]
            );
            const email = user.email;
            const user1 = user.user;
            if (rows.length > 0) {
                const hashedPassword = hashPassword(user.password);
                if(hashedPassword == rows[0].password){
                    console.log("Successful Login");
                    const userToken = generateToken({ email: email });
    
                    return { token: userToken, user1, email };
                } else {
                    console.log('Invalid Password');
                    throw new Error('Invalid Password');
                }
            } else {
                console.log('Invalid Email');
                throw new Error('Invalid Email');
            }
        } catch (error) {
            console.log(error)
            throw new Error(`Erro ao logar`);
        }
    }
}

export default usersServices