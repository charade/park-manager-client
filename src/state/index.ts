import { userReducer, placesReducer, formReducer, colleaguesReducer } from './reducers';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    user : userReducer,
    places : placesReducer,
    form : formReducer,
    colleagues : colleaguesReducer
})

export const store = createStore(reducer, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducer>