import { userRole } from "../contants";

export type LoginT = {
    email: string,
    password : string
};
interface PersonalData{
    firstName : string,
    lastName :string
};
export type SignDataTypes = LoginT & PersonalData & {
    companyName : string,
    role ?: string,
};
export type User = {
    avatar : string,
    firstName : string,
    lastName : string,
    id : string
    role : string,
    email : string
    companyName : string
    companyId : string
}
export type UpdateUserTypes = LoginT & PersonalData & {
    avatar : Blob
};


//*************************** Default values ******************** */
export const SIGN_DEFAULT_VALUE : SignDataTypes = {
    firstName : '',
    lastName :'',
    companyName : '',
    email : '',
    password : '',
    role : userRole.PUBLIC
};
export const UPDATE_USER_DEFAULT_VALUES: UpdateUserTypes = {
    firstName : '',
    lastName :'',
    avatar : new Blob(),
    password :'',
    email :''
};
export const CREATE_USER_DEFAULT_VALUES : SignDataTypes = {
    firstName: '',
    lastName : '',
    companyName : '',
    email: '',
    password :'',
    role : userRole.ADMIN
}  

