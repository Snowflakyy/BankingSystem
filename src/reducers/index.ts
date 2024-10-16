import { combineReducers } from "redux";
import { DLoans } from "./DLoans";
import { DAccount } from "./DAccount";
import { DUser } from "./DUser";
import { DUserA } from "./DUser(after)";

export const rootReducer = combineReducers({
    DLoans,DAccount,DUser,DUserA
})
