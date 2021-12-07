export type CreatePlace = {
    placeNumber : number | undefined
    floor : number | undefined,
};
export type Place = CreatePlace & {
    id : string,
    available : boolean,
    occupancyTime : number,
    createdAt : string,
    updatedAt :string,
    userId ?: string,
    placeNumber : number
    floor : number
};
export const PLACES_DEFAULT_VALUE : CreatePlace = {
    placeNumber : undefined,
    floor : undefined,
}