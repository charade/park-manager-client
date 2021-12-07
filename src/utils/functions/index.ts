import { Places } from '../dataTypes/places';
import { userRole } from '../contants';


export const sortByCreationDate = (arr : Places[]) => arr.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
})

export const getFloors = (arr : Places []) => Array.from(new Set(arr.map(place => place.floor)));

export const switchPermissions = (role ?: string) =>{
    switch(role){
        case userRole.PUBLIC : return userRole.ADMIN;
        default : return userRole.PUBLIC
    }
}