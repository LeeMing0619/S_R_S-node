import { ActionType, getType } from "typesafe-actions"
import { Session } from "../models/model"
import * as sessionActionCreators from "../actions"

export type SessionAction = ActionType<typeof sessionActionCreators>

const initialState: Session = {
    accessToken: undefined,
    expiresIn: 0,
    pending: false,
    refreshToken: false,
    scope: undefined,
    tokenType: undefined
}

export default (state: Session = initialState, action: SessionAction) => {
    switch (action.type) {
        case getType(sessionActionCreators.loginInit):
            return {
                state,
                pending: true
            }
        case getType(sessionActionCreators.login):
            if (action.payload instanceof Error) {
                return {
                    ...state,
                    pending: false
                }
            }

            return {
                ...state,
                ...action.payload,
                pending: false
            }
        default:
            return state
    }
}