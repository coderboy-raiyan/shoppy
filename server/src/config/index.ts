import { config } from 'dotenv';
import path from 'path';

config({ path: path.join(process.cwd(), '.env') });

export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DB_URI: process.env.DB_URI,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
};
