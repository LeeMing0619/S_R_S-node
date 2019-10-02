import { AnyAction, combineReducers } from "redux"
import history from "./history"
import { connectRouter } from "connected-react-router"
import session from "logic/session/redux/reducers"
import { createFilteredReducer } from "./utils/redux/reducerUtils"
import apiReducer from "logic/api/redux/reducers"
import { createReducerPredicate } from "logic/api/redux/reducers"
//import { userDetails } from "logic/api/redux/models"
const userDetails = {
    namespace: "userDetails",
    apiPath: "users/additional_data",
    methods: { POST: true },
    isUrlEncoded: true,
    idField: "user",
}

const rootReducer = combineReducers<any>({
    router: connectRouter(history),
    session,
    userDetails: createFilteredReducer(
        apiReducer,
        createReducerPredicate(userDetails)
    ),
    userTest: createFilteredReducer(
        apiReducer,
        createReducerPredicate(userDetails)
    )
})

export default rootReducer