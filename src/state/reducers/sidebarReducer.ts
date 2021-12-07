import { SidebarAction } from '../actions';


export type SidebarActionType = {
    type :string
    payload :boolean
}

const sidebarReducer = (state : boolean = false, action : SidebarActionType) => {
    switch(action.type){
        case SidebarAction.TOGGLE :
            state = action.payload
            return state;
        default: return state
    }
};
export default sidebarReducer;