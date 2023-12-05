import jwt from 'jsonwebtoken';

const secretKey = 'Eusoulindo100%'; 

const generateToken = (data: any): string => {
    return jwt.sign(data, secretKey, { expiresIn: '2h' }); 
};

const verifyToken = (token: string): any => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export { generateToken, verifyToken };
