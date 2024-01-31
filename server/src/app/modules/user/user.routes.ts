import { Router } from 'express';
import userControllers from './user.controllers';

const userRouter = Router();

userRouter.post('/admin-login', userControllers.adminLoginController);

export default userRouter;
