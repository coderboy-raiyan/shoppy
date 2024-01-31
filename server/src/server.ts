import http from 'http';
import mongoose from 'mongoose';
import app from './app/app';
import config from './config';

const PORT = config.PORT || 5000;

const server = http.createServer(app);

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
        console.log('DB connected Successfully');
        server.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

bootstrap();
