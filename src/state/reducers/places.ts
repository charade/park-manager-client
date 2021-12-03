import { Places } from '../../types/places';
import { PlacesAction } from '../actions';

export type PlacesActionType = {
    type : string,
    payload : Places | Places[] 
}

const placesReducer = (state : Places[] = [], action : PlacesActionType) => {
    switch(action.type){
        case PlacesAction.LOAD_PLACES : 
        case PlacesAction.ADD_PLACE :
            state = state.concat(action.payload);
            return state;
        default : return state;
    }
};

export default placesReducer;