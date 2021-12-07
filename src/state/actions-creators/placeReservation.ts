import { PlaceAction } from "../actions";
import { ReservationActionType } from "../reducers/placeReservation";
import { Dispatch } from "react";
import { places } from "../../services";

export const findPlace = () => {
    return async(dispatch : Dispatch<ReservationActionType>) => {
        try{
            const place = await places.find();
            dispatch({
                type : PlaceAction.FIND,
                payload : place.data
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