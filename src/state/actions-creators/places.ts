import { Places } from "../../types/places";
import { PlacesAction } from "../actions";
import { PlacesActionType } from "../reducers/places";
import { Dispatch } from "redux";
import { places } from '../../services';

export const loadPlaces = async() => {
    const requestedPlaces  = await places.getAll();
    return (dispatch : Dispatch<PlacesActionType>) => {
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