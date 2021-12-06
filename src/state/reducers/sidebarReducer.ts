import { SidebarAction } from '../actions';


export type SidebarActionType = {
    type :string
    payload ?:boolean
}

const sidebarReducer = (state : boolean = false, action : SidebarActionType) => {
    switch(action.type){
        case SidebarAction.TOGGLE :
            /**
             * side bar ca close on blur event  
             * we can't toggle in this case
             * instead we pass passe false explicitly
             */
            state = !state
            if(action.payload){
                state = action.payload
            }
            return state;
        default: return state
    }
};
export default sidebarReducer;