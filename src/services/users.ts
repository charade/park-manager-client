import request from './config';
import { SignDataTypes, LoginT } from '../types/user';

const users =  {
    register : (data: SignDataTypes) => request.post('/users/register', data),
    login : (data: LoginT) => request.post('/users/login', data),
}

export default users;