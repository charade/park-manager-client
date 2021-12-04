import { Places } from '../types/places';

export const sortByCreationDate = (arr : Places[]) => arr.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
})