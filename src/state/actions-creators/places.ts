import { Places } from "../../types/places";
import { PlacesAction } from "../actions";
import { PlacesActionType } from "../reducers/places";
import { Dispatch } from "redux";
import { places } from '../../services';

export const loadPlaces = () => {
    return async(dispatch : Dispatch<PlacesActionType>) => {
        const requestedPlaces  = await places.getAll();
        dispatch({
            type : PlacesAction.LOAD_PLACES,
            payload : requestedPlaces.data
        })
    };
};

export const addPlace = (place : Places) => {
    return (dispatch : Dispatch<PlacesActionType>) => {
        console.log(19, place)
        dispatch({
            type : PlacesAction.LOAD_PLACES,
            payload : place
        })
        console.log(23, place)
    };
};