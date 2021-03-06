import { request } from './config';
import { CreatePlace } from '../utils/dataTypes/places';

const places = {
    create : (place : CreatePlace) => request.post('/places/auth', place),
    getAll : () => request.get('/places/auth'),
    filterByFloor : (floor : number) => request.get(`/places/auth/${floor}`),
    find : async() => request.get('/places/auth/parked'),
    reserve : (data : {id: string}) => request.patch(`/places/auth`, data),
    reset : (data : { id : string }) => request.patch('/places/auth/free', data)
};

export default places;