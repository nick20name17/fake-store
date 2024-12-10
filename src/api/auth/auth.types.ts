export interface AuthPayload {
    email: string
    password: string
}

export interface AuthResponse {
    access_token: string
    refresh_token: string
}
