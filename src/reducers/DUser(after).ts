import {ACTION_TYPES } from "../actions/DUser(after)"
import {  DUserAfterAction, DUserAfterState } from "../types";

interface initialStateProps{
    users?:DUserAfterState[]
}

const initialState:initialStateProps = {
    users :[]
}
export const DUserA = (
    state: initialStateProps= initialState, 
    action: DUserAfterAction
): initialStateProps => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_USERS:
            return{
                users: Array.isArray(action.payload) ? action.payload : []
            }
            break;
            case ACTION_TYPES.FETCH_ID:
                return{
                    ...state,
                    users: action.payload ? [action.payload] : []

                }
                case ACTION_TYPES.UPDATE:
                    return {
                      ...state,
                      users: state.users?.map((x) =>
                        x.id == action.payload?.id ? action.payload : x
                      ), //returns list of the updated element as well as the others
                    };
                break;
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                users:state.users?.filter(x=>x.id !=action.payload?.id)            };

        // Add more cases as needed
        default:
            return state;
    }
}
//action type to be defined