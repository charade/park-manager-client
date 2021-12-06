import { request } from './config';
import { SignDataTypes, LoginT } from '../utils/dataTypes/user';

const users =  {
    register : (data: SignDataTypes) => request.post('/users/register', data),
    login : (data: LoginT) => request.post('/users/login', data),
    getColleagues: () => request.get('/users/auth/colleagues'),
}

export default users;