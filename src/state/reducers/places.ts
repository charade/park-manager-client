import { Place } from '../../utils/dataTypes/places';
import { PlacesAction } from '../actions';

interface Load{
    payload : Place[]
};
interface Add{
    payload : Place
};
interface Remove{
    payload : string
};

export type PlacesActionType = (Load | Remove | Add) & { type : string };

const placesReducer = (state : Place[] = [], action : PlacesActionType) => {
    switch(action.type){
        case PlacesAction.LOAD_PLACES : 
            state = action.payload as Place[];
            return state;
        case PlacesAction.ADD_PLACE :
            state = state.concat(action.payload as Place);
            return state;

        case PlacesAction.REMOVE_PLACE : 
            const id = action.payload as string;
            state = state.filter(place => place.id !== id);
            return state;
        case PlacesAction.FILTERBYFLOOR :
            state = [...action.payload as Place[]] ;
            return state;
        default : return state;
    }
};

export default placesReducer;