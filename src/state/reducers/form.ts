import { FormAction } from "../actions";

export type FormActionType ={
    type : string,
    payload : number
}

const formReducer = (state : number = 0, action : FormActionType) => {
    switch(action.type){
        case FormAction.SET_STEP : 
            state = action.payload;
            return state;
        default : return state;
    }
}

export default formReducer;