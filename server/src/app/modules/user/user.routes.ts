import { Router } from 'express';
import authMiddleware from '../../middlewares/authMiddleware';
import userControllers from './user.controllers';

const userRouter = Router();

userRouter.post('/admin-login', userControllers.adminLoginController);
userRouter.get('/get-user', authMiddleware, userControllers.getUserController);

export default userRouter;
