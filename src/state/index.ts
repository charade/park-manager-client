import { userReducer, placesReducer } from './reducers';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    user : userReducer,
    places : placesReducer
})

export const store = createStore(reducer, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducer>