import { Request, Response } from 'express';
import usersServices from '../services/users';
import { User } from '../models/users';

const userController = {
    newUser: async (req: Request, res: Response) => {
        try {
            const { user, email, password, profile_photo } = req.body;

            // Instantiate a new User object with the provided data
            const newUser = new User(
                user,
                email,
                password,
                profile_photo,
            );

            // Call the newUser method from the service, passing the user instance
            const result = await usersServices.newUser(newUser);

            console.log(result);
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server Error" });
        }
    },
    login: async (req: Request, res: Response) => {
        try {
            const { user, email, password } = req.body;
            const login = await usersServices.login(user, email, password);

            console.log(login);
            res.status(200).json(login);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server Error" });
        }
    },
};

export default userController;
