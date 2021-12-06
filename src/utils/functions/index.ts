import { Places } from '../dataTypes/places';

export const sortByCreationDate = (arr : Places[]) => arr.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
})

export const getFloors = (arr : Places []) => Array.from(new Set(arr.map(place => place.floor)));