import { SidebarAction } from "../actions";
import { SidebarActionType } from "../reducers/sidebarReducer";
import { Dispatch } from "react";

export const toggleSidebar = (open : boolean) => {
    return (dispatch : Dispatch<SidebarActionType>) => {
        dispatch({
            type : SidebarAction.TOGGLE,
            payload : open
        })
    }
};