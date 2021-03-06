import { Place } from "../../utils/dataTypes/places";
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
export const addPlace = (place : Place) => {
    return (dispatch : Dispatch<PlacesActionType>) => {
        dispatch({
            type : PlacesAction.ADD_PLACE,
            payload : place
        })
    };
};
export const removePlace = (id : string) => {
    return (dispatch : Dispatch<PlacesActionType>) => {
        dispatch({
            type : PlacesAction.REMOVE_PLACE,
            payload : id
        })
    }
};
export const filterByFloor = (floor: number) => {
    return async(dispatch : Dispatch<PlacesActionType>) => {
        const response = await places.filterByFloor(floor);
        dispatch({
            type : PlacesAction.FILTERBYFLOOR,
            payload : response.data
        })
    }
};
