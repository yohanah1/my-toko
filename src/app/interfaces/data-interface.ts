import { IUser } from "./user-interface";

interface IData {
    Authorization?: string;
    Users?: IUser[];
}

export { IData };
