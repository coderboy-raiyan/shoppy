/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
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
        statusCode: StatusCodes.OK,
        message: 'Signed in successfully',
        data: {
            token: result.token,
        },
    });
});
const getUserController = catchAsyncError(async (req: any, res: any) => {
    const { id, role } = req;
    const result = await userServices.getUserServices(role, id);
    sendResponse<{ userInfo: any }>(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'user found successfully',
        data: {
            userInfo: result,
        },
    });
});

const userControllers = {
    adminLoginController,
    getUserController,
};

export default userControllers;
