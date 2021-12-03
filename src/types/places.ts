export type Places = {
    placeNumber : number | undefined
    floor : number | undefined,
    id ?: string,
    userId ?: string,
    availablity ?: boolean
}

export const PLACES_DEFAULT_VALUE : Places = {
    placeNumber : undefined,
    floor : undefined,
}