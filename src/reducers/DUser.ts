import {ACTION_TYPES } from "../actions/Duser"
import { DUserAction, DUserState } from "../types";

interface initialStateProps{
    list:DUserState[]
}
interface UserStateProps{
    user: DUserState | undefined;
}
const initialState:UserStateProps = {
    user : undefined
}
export const DUser = (
    state: UserStateProps= initialState, 
    action: DUserAction
): UserStateProps => {
    switch (action.type) {
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                user:action.payload
            };

        // Add more cases as needed
        default:
            return state;
    }
}
//action type to be defined