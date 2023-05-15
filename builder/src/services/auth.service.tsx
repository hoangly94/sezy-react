import Token from '@/constants/token'
import { LoginFormValues } from '@/models/auth.model'
import { setToken } from '@/store/auth'
import { usePostLoginMutation } from '@/store/auth/api'
import { cookie } from '@/utils/cookie'
import { useAppDispatch } from '../hooks'
import { message } from 'antd'
import { useTranslation } from 'next-i18next'

export const useLoginRequest = () => {
  const { t } = useTranslation('message')
  const dispatch = useAppDispatch()
  const [requestLogin, options] = usePostLoginMutation()

  const request = async (loginFormValues: LoginFormValues) => {
    const result = await requestLogin(loginFormValues)

    if ('error' in result) {
      message.error(t('invalidUsernamePassword'))
      return
    }

    const accessToken = result.data.accessToken
    cookie.set(Token.ACCESS_TOKEN, accessToken.value, accessToken.expiredAt)
    dispatch(setToken(accessToken.value))
    localStorage.setItem('email', loginFormValues.email)
  }
  return { request, data: options.data, options }
}

export const useLogoutRequest = () => {
  const dispatch = useAppDispatch()

  const request = async () => {
    cookie.remove(Token.ACCESS_TOKEN)
    dispatch(setToken(''))
  }

  return { request }
}
