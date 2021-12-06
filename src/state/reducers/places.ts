import { Places } from '../../utils/dataTypes/places';
import { PlacesAction } from '../actions';

interface Load{
    payload : Places[]
};
interface Add{
    payload : Places
};
interface Remove{
    payload : string
};

export type PlacesActionType = (Load | Remove | Add) & { type : string };

const placesReducer = (state : Places[] = [], action : PlacesActionType) => {
    switch(action.type){
        case PlacesAction.LOAD_PLACES : 
        case PlacesAction.ADD_PLACE :
            state = state.concat(action.payload as Places | Places[]);
            return state;

        case PlacesAction.REMOVE_PLACE : 
            const id = action.payload as string;
            state = state.filter(place => place.id !== id);
            return state;
        case PlacesAction.FILTERBYFLOOR :
            state = [...action.payload as Places[]] ;
            return state;
            
        default : return state;
    }
};

export default placesReducer;