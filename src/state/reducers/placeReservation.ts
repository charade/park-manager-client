import { PlaceAction } from "../actions";
import { Place } from "../../utils/dataTypes/places";

type FindReservationAction = {
    type : string,
    payload : Place | null
}
export type ReservationActionType = {type: string } | FindReservationAction ;
    
const placeReservationReducer = (state : Place | null = null, action : ReservationActionType) => {
    switch(action.type){
        case PlaceAction.FIND : 
            const { payload } = action as FindReservationAction
            state = Object.assign({}, payload );
            return state;
        case PlaceAction.RESET : 
            state = null;
            return state
        default : return state;
    }
};
export default placeReservationReducer;