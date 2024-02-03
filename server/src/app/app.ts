import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import router from './routes';
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ['http://localhost:5173', 'https://shoppy-dashboard-five.vercel.app'],
        credentials: true,
    })
);
app.use(cookieParser());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use(globalErrorHandler);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API not found',
            },
        ],
    });
});

export default app;
