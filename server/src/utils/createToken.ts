import jwt from 'jsonwebtoken';
import config from '../config';

async function createToken<T extends object>(data: T) {
    const token = await jwt.sign(data, config.TOKEN_SECRET as string, { expiresIn: '7d' });
    return token;
}

export default createToken;
