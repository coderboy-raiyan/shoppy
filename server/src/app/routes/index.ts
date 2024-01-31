import { Router } from 'express';
import userRouter from '../modules/user/user.routes';

const router = Router();

const routes = [
    {
        path: '/users',
        route: userRouter,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
