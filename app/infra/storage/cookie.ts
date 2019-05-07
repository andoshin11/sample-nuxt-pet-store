import Cookie from 'js-cookie'

const DEFAULT_EXPIRES = 360

export default class {
  set(key: string, value: string | object, expires = DEFAULT_EXPIRES) {
    Cookie.set(key, value, { expires })
  }

  get(key: string) {
    return Cookie.get(key)
  }

  delete(key: string) {
    return Cookie.remove(key)
  }
}
