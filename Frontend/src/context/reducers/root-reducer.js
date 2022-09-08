import { combineReducers } from "redux";
import usersReducers from "../reducers/reducer";




const rootReducer = combineReducers({
    data : usersReducers
})

export default rootReducer