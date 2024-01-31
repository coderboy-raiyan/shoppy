import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import { IGenericErrorResponse } from '../interfaces/error';

function handleMongooseValidationError(
    error: mongoose.Error.ValidationError
): IGenericErrorResponse {
    const errors = Object.values(error).map((error) => {
        return {
            path: error.path,
            message: error.message,
        };
    });
    const statusCode = StatusCodes.BAD_REQUEST;

    return {
        message: 'Validation Error',
        statusCode,
        errorMessages: errors,
    };
}

export default handleMongooseValidationError;
