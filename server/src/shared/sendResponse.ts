import { Response } from 'express';
import { IApiResponse } from '../interfaces/common';

function sendResponse<T>(res: Response, data: IApiResponse<T>) {
    return res.status(data.statusCode).json({
        statusCode: data.statusCode,
        message: data.message || null,
        success: true,
        data: data.data || null,
        meta: data.meta || null,
    });
}

export default sendResponse;
