import { ColleaguesAction } from "../actions";
import { ColleaguesActionType, ChangePermissions } from "../reducers/colleaguesReducer";
import { Dispatch } from "react";
import { users } from "../../services";

export const loadColleagues = () => {
    return async(dispatch : Dispatch<ColleaguesActionType>) => {
        const colleagues = await users.getColleagues();
        dispatch({
            type : ColleaguesAction.LOAD_COLLEAGUES,
            payload : colleagues.data
        })
    }
};

export const changePermissions = (data : ChangePermissions) => {
    return (dispatch : Dispatch<ColleaguesActionType>) => {
        dispatch({
            type : ColleaguesAction.CHANGE_PERMISSIONS,
            payload : data
        })
    }
}