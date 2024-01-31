import { HydratedDocument, Model } from 'mongoose';

export type IAdminModel = {
    email: string;
    password: string;
    name: string;
    role: string;
    image: string;
};

export type IUserMethods = {
    fullName(): string;
};

export type IUserModel = Model<IAdminModel, object, IUserMethods> & {
    createWithFullName(name: string): Promise<HydratedDocument<IAdminModel, IUserMethods>>;
};
