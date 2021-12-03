export type CreatePlace = {
    placeNumber : number | undefined
    floor : number | undefined,
}

export type Places = CreatePlace & {
    id : string,
    available : boolean,
    occupancyTime : number,
    createdAt : string,
    updatedAt :string,
    userId : string
}

export const PLACES_DEFAULT_VALUE : CreatePlace = {
    placeNumber : undefined,
    floor : undefined,
}