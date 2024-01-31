import { StatusCodes } from 'http-status-codes';
import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessage, IGenericErrorResponse } from '../interfaces/error';

function handleZodError(error: ZodError): IGenericErrorResponse {
    const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue?.path.length - 1],
            message: issue.message,
        };
    });
    const statusCode = StatusCodes.BAD_REQUEST;
    return {
        statusCode,
        message: 'Zod Validation Error',
        errorMessages: errors,
    };
}

export default handleZodError;
