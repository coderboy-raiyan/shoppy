/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import handleMongooseValidationError from '../../errors/handleMongooseValidationError';
import handleZodError from '../../errors/handleZodError';
import { IGenericErrorMessage } from '../../interfaces/error';

function globalErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';
    let errorMessages: IGenericErrorMessage[] = [];

    console.log(error, 'global');

    if (error.name === 'ValidationError') {
        const modifiedError = handleMongooseValidationError(error);
        statusCode = modifiedError.statusCode;
        message = modifiedError.message;
        errorMessages = modifiedError.errorMessages;
    } else if (error instanceof ZodError) {
        const modifiedError = handleZodError(error);
        statusCode = modifiedError.statusCode;
        message = modifiedError.message;
        errorMessages = modifiedError.errorMessages;
    } else if (error instanceof ApiError) {
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = error.message ? [{ path: '', message: error.message }] : [];
    } else if (error instanceof Error) {
        message = error.message;
        errorMessages = error.message ? [{ path: '', message: error.message }] : [];
    }

    return res.status(statusCode).json({
        statusCode: statusCode,
        success: false,
        message,
        errorMessages,
        stack: config.NODE_ENV !== 'production' ? error.stack : null,
    });
}

export default globalErrorHandler;
