import { UserAction } from "../actions";
import { User } from "../../utils/types/user";

export type UserActionType = {
    type : string,
    payload : User | null
};

const userReducer = (state : User | null = null, action: UserActionType) => {
    switch(action.type){
        case UserAction.LOAD_DATA : 
            state = Object.assign({}, action.payload);
            return state;

        default : return state
    };
}

export default userReducer;