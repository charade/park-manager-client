import { User } from "../../utils/dataTypes/user";
import { UserAction } from "../actions";
import { UserActionType } from '../reducers/users';
import { Dispatch } from "react";

//load user data from local storage after authentication success
export const loadUser = () => {
    let user : User | null = null;
    const auth = localStorage.getItem('auth');
    if(auth){
        user = JSON.parse(auth).user
    };
    return (dispatch : Dispatch<UserActionType>) => {
        dispatch({
            type : UserAction.LOAD_DATA,
            payload : user
        })
    }
}