import { request } from './config';
import { SignDataTypes, LoginT } from '../utils/dataTypes/user';

interface ChangePermissions {
    id : string,
    role : string
}
const users =  {
    register : (data: SignDataTypes) => request.post('/users/register', data),
    login : (data: LoginT) => request.post('/users/login', data),
    getColleagues: () => request.get('/users/auth/colleagues'),
    updatePermissions :(data : ChangePermissions) => request.patch('/users/auth/permission', data),
}

export default users;