import { Places } from '../../types/places';
import { PlacesAction } from '../actions';

type PlacesT = Places | Places[] ;

export type PlacesActionType = {
    type : string,
    payload : PlacesT | string
};

const placesReducer = (state : Places[] = [], action : PlacesActionType) => {
    switch(action.type){
        case PlacesAction.LOAD_PLACES : 
        case PlacesAction.ADD_PLACE :
            console.log(action.payload)
            state = state.concat(action.payload as PlacesT);
            return state;
        case PlacesAction.REMOVE_PLACE : 
            const id = action.payload as string;
            state = state.filter(place => place.id !== id);
            return state;
        default : return state;
    }
};

export default placesReducer;