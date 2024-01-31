import { Request, Response } from 'express';
import catchAsyncError from '../../../shared/catchAsyncError';
import sendResponse from '../../../shared/sendResponse';
import userServices from './user.services';

const adminLoginController = catchAsyncError(async (req: Request, res: Response) => {
    const result = await userServices.adminLoginService(req.body);
    res.cookie('accessToken', result.token, {
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    sendResponse<{ token: string }>(res, {
        success: true,
        statusCode: 200,
        message: 'Signed in successfully',
        data: {
            token: result.token,
        },
    });
});

const userControllers = {
    adminLoginController,
};

export default userControllers;
