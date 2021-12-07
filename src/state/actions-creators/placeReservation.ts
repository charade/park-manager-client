import { PlaceAction } from "../actions";
import { ReservationActionType } from "../reducers/placeReservation";
import { Dispatch } from "react";
import { Place } from "../../utils/dataTypes/places";

export const setReservation = (place : Place) => {
    return async(dispatch : Dispatch<ReservationActionType>) => {
        try{
            dispatch({
                type : PlaceAction.FIND,
                payload : place
            })
        }
        catch{
            dispatch({
                type : PlaceAction.RESET
            })
        }
    }
};

export const resetPlace = () => {
    return (dispatch : Dispatch<ReservationActionType>) => {
        dispatch({
            type : PlaceAction.RESET
        })
    }
};