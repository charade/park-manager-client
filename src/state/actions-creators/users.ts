import { User } from "../../utils/dataTypes/user";
import { UserAction } from "../actions";
import { UserActionType } from '../reducers/users';
import { Dispatch } from "react";

//load user data from local storage after authentication success
export const setUser = (user : User) => {
    return (dispatch : Dispatch<UserActionType>) => {
        dispatch({
            type : UserAction.LOAD_DATA,
            payload : user
        })
    }
}