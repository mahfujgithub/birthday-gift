import { Model, Types } from 'mongoose';
import { IStuff } from '../stuff/stuff.interface';

export type IUser = {
  id: string | undefined;
  role: string;
  password: string;
  stuff?: Types.ObjectId | IStuff;
};

export type UserModel = {
  isUserExist(id: string): Promise<Pick<IUser, 'id' | 'password' | 'role'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
} & Model<IUser>;

// export type UserModel = Model<IUser, Record<string, unknown>>;
