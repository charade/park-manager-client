import { User } from "../../utils/dataTypes/user";
import { ColleaguesAction } from "../actions";

export type ChangePermissions = {
    index : number,
    role : string
}
export type ColleaguesActionType = {
    type : string,
    payload : User[] | ChangePermissions
}

const colleaguesReducer = (state: User[] = [], action : ColleaguesActionType) => {
    switch(action.type){
        case ColleaguesAction.LOAD_COLLEAGUES: 
            state = [...action.payload as User[]];
            return state;
        case ColleaguesAction.CHANGE_PERMISSIONS : 
            const { index, role } = action.payload as ChangePermissions;
            console.log(role)
           console.log(state[index])
           state[index].role = role
           console.log(state[index])
           console.log(state)
            return state ;
        default : return state;
    }
};

export default colleaguesReducer;