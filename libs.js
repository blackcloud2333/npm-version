const axios = require('axios')
const timeout = 9500 // 超时时间

class Base {
  ajax(url, opt) {
    const options = Object.assign({
      loading: true,
      timeout,
      url: url
    }, opt)

    let timer
    timer = setTimeout(() => {
      if (options.loading) {
        console.log('请求中,请稍等')
      }
    }, 1000)

    setTimeout(() => {
      options.loading = false
    }, 5000)

    return new Promise((resolve, reject) => {
      axios(options).then(res => {
        resolve(res)
        options.loading = false
        clearTimeout(timer)
      }).catch(error => {
        options.loading = false
        clearTimeout(timer)
        reject(error)
      })
    })
  }

  get(url, params = {}, options = {}) {

    const opt = Object.assign({
      method: 'get',
      params
    }, options)

    return this.ajax(url, opt)
  }
  post(url, data = {}, options = {}) {
    const opt = Object.assign({
      method: 'post',
      data
    }, options)

    return this.ajax(url, opt)
  }
}

module.exports = {
  Base
}
