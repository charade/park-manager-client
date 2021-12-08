import { Place } from '../dataTypes/places';
import { userRole } from '../contants';


export const sortByUpdateDate = (arr : Place[]) => arr.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
});

export const getFloors = (arr : Place []) => Array.from(new Set(arr.map(place => place.floor)));

export const switchPermissions = (role ?: string) =>{
    switch(role){
        case userRole.PUBLIC : return userRole.ADMIN;
        default : return userRole.PUBLIC
    }
}