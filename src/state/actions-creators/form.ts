import { FormAction } from "../actions";
import { FormActionType } from '../reducers/form';
import { Dispatch } from "react";

export const setFormStep = (step: number) => {
    return(dispatch : Dispatch<FormActionType>) => {
        dispatch({
            type : FormAction.SET_STEP,
            payload : step
        })
    }
}