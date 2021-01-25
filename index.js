const { Base } = require('./libs')
const api = new Base()

// todo: 判断res状态码是不是对的
api.get('https://registry.npmjs.org/react-chuck/').then(res => {
  res.data ?
    console.log([{ 'name': res.data._id }, { 'description': res.data.description }, { 'versions': res.data['dist-tags'].latest }])
    : console.log('返回值异常，请检查错误')
}).catch((err) => {
  console.log('这里报错了')
})