import Cookies from 'universal-cookie'

class Cookie {
  private cookies = new Cookies()

  get(key: string): string {
    return this.cookies.get(key)
  }

  set(key: string, value: string, expiredAt?: number) {
    this.cookies.set(key, value, {
      path: '/',
      expires: expiredAt ? new Date(expiredAt * 1000) : undefined,
    })
  }

  has(key: string) {
    return !!this.cookies.get(key)
  }

  remove(key: string) {
    this.cookies.remove(key)
  }
}

export const cookie = new Cookie()
