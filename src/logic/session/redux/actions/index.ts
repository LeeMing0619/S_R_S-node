import { createStandardAction } from "typesafe-actions"

import {
    LOGIN_INIT,
    LOGIN,
    LOGOUT_INIT,
    LOGOUT,
    SIGNUP,
    SIGNUP_INIT,
    REFRESH_INIT,
    REFRESH,
    SIGNUP_ERROR
} from "../actionTypes"

export interface LoginInitParameters {
    email: string,
    password: string,
    role?: string,
    redirectToDetails?: boolean
}

export const loginInit = createStandardAction(LOGIN_INIT).map(
    ({
        email,
        password,
        role,
        redirectToDetails = false
    }: LoginInitParameters) => ({
        payload: {
            email,
            password,
            role,
            redirectToDetails
        }
    })
)

export const login = createStandardAction(LOGIN).map(
    (accessToken: string, tokenType: string) => ({
        payload: { accessToken, tokenType }
    })
)
