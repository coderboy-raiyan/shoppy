import mongoose from 'mongoose';
import { USER_ROLES } from './user.constants';
import { IAdminModel, IUserMethods, IUserModel } from './user.interfaces';

const adminSchema = new mongoose.Schema<IAdminModel, IUserModel, IUserMethods>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    image: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: USER_ROLES.admin,
    },
});

const AdminModel = mongoose.model<IAdminModel, IUserModel>('admin', adminSchema);

export default AdminModel;
