export interface LoginFormValues {
  email: string
  password: string
}
export interface LoginResponse {
  accessToken: {
    value: string
    expiredAt: number
  }
  refreshToken: {
    value: string
    expiredAt: number
  }
}
