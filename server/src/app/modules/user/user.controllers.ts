import { Request, Response } from 'express';
import catchAsyncError from '../../../shared/catchAsyncError';

const adminLoginController = catchAsyncError((req: Request, res: Response) => {
    console.log('Hi admin');
    res.send('Hi');
});

const userControllers = {
    adminLoginController,
};

export default userControllers;
