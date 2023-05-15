import Token from '@/constants/token'
import { cookie } from '@/utils/cookie'
import { AppDispatch } from '.'
import { Middleware } from '@reduxjs/toolkit'

// Define a middleware to handle token refresh and redirect to login
export const tokenRefreshMiddleware: Middleware<any, any, AppDispatch> =
  () => (next) => async (action) => {
    const result = await next(action)

    // Check if the access token is invalid/expired
    if (result.error?.status === 401) {
      const refreshToken = cookie.get(Token.REFRESH_TOKEN)
      if (!refreshToken) {
        cookie.remove(Token.ACCESS_TOKEN)
        return
      }

      // Fetch a new access token using the refresh token
      const response = await fetch(`${process.env.API_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      })

      if (!response.ok) {
        cookie.remove(Token.ACCESS_TOKEN)
        return result
      }

      const { accessToken } = await response.json()
      cookie.set(Token.ACCESS_TOKEN, accessToken.value, accessToken.expiredAt)

      // Retry the original request with the new access token
      const retryResult = await next(action)
      return retryResult
    }

    return result
  }
