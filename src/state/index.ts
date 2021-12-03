import { userReducer } from './reducers';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    user : userReducer
})

export const store = createStore(reducer, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducer>