import { userRole } from "../contants";

export type LoginT = {
    email: string,
    password : string
};
export type SignDataTypes = LoginT & {
    companyName : string,
    firstName : string,
    lastName : string,
    role ?: string,
};
export const SIGN_DEFAULT_VALUE : SignDataTypes = {
    firstName : '',
    lastName :'',
    companyName : '',
    email : '',
    password : '',
    role : userRole.PUBLIC
};
export type User = {
    avatar : string,
    firstName : string,
    lastName : string,
    id ?: string
    role : string,
    email : string
}