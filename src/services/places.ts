import { request } from './config';
import { CreatePlace } from '../types/places';

const places = {
    create : (place : CreatePlace) => request.post('/places/auth', place),
    getAll : () => request.get('/places/auth'),
    getByFloor : (floor : number) => request.get(`/places/auth/${floor}`),
    reserve : ({id} :{ id: string}) => request.patch(`/places/auth`, {id})
};

export default places;