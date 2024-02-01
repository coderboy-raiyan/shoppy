/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';

async function authMiddleware(req: any, res: Response, next: NextFunction) {
    try {
        const { accessToken } = req.cookies;
        if (!accessToken) {
            throw new ApiError('Unauthorized credentials', StatusCodes.UNAUTHORIZED);
        }
        const decodeToken: any = await jwt.verify(accessToken, config.TOKEN_SECRET as string);
        req.role = decodeToken.role;
        req.id = decodeToken.id;
        next();
    } catch (error) {
        next(error);
    }
}

export default authMiddleware;
