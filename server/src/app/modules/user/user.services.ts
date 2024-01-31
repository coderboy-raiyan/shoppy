import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import createToken from '../../../utils/createToken';
import AdminModel from './user.model';

const adminLoginService = async (payload: { email: string; password: string }) => {
    const { email, password } = payload;
    const admin = await AdminModel.findOne({ email }).select('+password');
    if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
            const token = await createToken<{ id: string; role: string }>({
                id: admin.id,
                role: admin.role,
            });
            return { token };
        } else {
            throw new ApiError('Invalid password', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    } else {
        throw new ApiError('User not exists', StatusCodes.NOT_FOUND);
    }
};

const userServices = {
    adminLoginService,
};

export default userServices;
