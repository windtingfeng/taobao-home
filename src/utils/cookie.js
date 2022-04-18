import cookie from 'js-cookie'

export default {
    getCookie:(data) => cookie.get(data),
    setCookie:(name,data) => cookie.set(name,data)
}
