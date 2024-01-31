import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

function validateRequest(schema: AnyZodObject) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
                cookies: req.cookies,
            });
            return next();
        } catch (error) {
            return next(error);
        }
    };
}

export default validateRequest;
