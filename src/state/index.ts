import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {
    userReducer,
    placesReducer,
    formReducer,
    colleaguesReducer,
    sidebarReducer, 
    placeReservationReducer 
} from './reducers';

const reducer = combineReducers({
    user : userReducer,
    places : placesReducer,
    form : formReducer,
    colleagues : colleaguesReducer,
    sidebar : sidebarReducer,
    reservedPlace : placeReservationReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducer>