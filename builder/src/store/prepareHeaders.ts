import Token from '@/constants/token'
import { cookie } from '@/utils/cookie'

const prepareHeaders = (headers: any) => {
  headers.Authorization = `Bearer ${cookie.get(Token.ACCESS_TOKEN)}`
  headers['Content-Type'] = 'application/json'

  return headers
}

export default prepareHeaders
