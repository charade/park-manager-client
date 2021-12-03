import { UserAction } from "../actions";
import { User } from "../../types/user";

export type UserActionType = {
    type : string,
    payload : User | null
};

export const userReducer = (state : User | null = null, action: UserActionType) => {
    switch(action.type){
        case UserAction.LOAD_DATA : 
            state = Object.assign({}, action.payload);
            return state;

        default : return state
    };
}