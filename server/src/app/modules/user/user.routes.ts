import { Router } from 'express';
import userControllers from './user.controllers';

const userRouter = Router();

userRouter.post('/admin-log', userControllers.adminLoginController);

export default userRouter;
