export interface Session {
    tokenType?: string
    accessToken?: boolean
    refreshToken?: boolean
    expiresIn: number
    scope?: string
    pending: boolean
}