import { User } from "../../utils/dataTypes/user";
import { ColleaguesAction } from "../actions";

export type ColleaguesActionType = {
    type : string,
    payload : User[] | string
}

const colleaguesReducer = (state: User[] = [], action : ColleaguesActionType) => {
    switch(action.type){
        case ColleaguesAction.LOAD_COLLEAGUES: 
            state = [...action.payload as User[]];
            return state;
        default : return state;
    }
};

export default colleaguesReducer;