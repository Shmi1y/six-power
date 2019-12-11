// 引入Koa
const Koa = require('koa')
// 引入KoaRouter
const KoaRouter = require('koa-router')
// 实例化Koa
let koa = new Koa()
// 实例化KoaRouter
let koaRouter = new KoaRouter()
require('./db');
const sms_util = require('./util/sms_util')
const users = {}
// const createToken = require('../token/createToken')
// const checkToken = require('../token/checkToken')
// 引入detas数据
// let datas = require('./datas/data.json')
const Users = require('./models/users')
//接口
// search的接口
// koaRouter.get('/search',(ctx) => {
//   const result = ctx.query.searchText
//   console.log(result)
//   ctx.body = datas
// })

//login的接口
koaRouter.get('/login',async (ctx) => {
  const {username,password} = ctx.query
  // eslint-disable-next-line no-console
  console.log(username,password)
  // console.log(result)
  // ctx.body= "哈哈哈哈"
  // eslint-disable-next-line no-console
  console.log(Users)
  let user=await Users.findOne({ username });
  // console.log(result)
  //   result.then((user) => {
      if (user) {
        // eslint-disable-next-line no-consoles
        if(user.password !== password){
          // eslint-disable-next-line no-console
          ctx.body = { code: 1, msg: '用户名或密码不正确!' }
        }else{
          ctx.body ={ code: 0, data:{_id: user._id, username: user.username} }
        }
        // return new Promise(() => {}) // 返回一个不调用resolve()/reject()的promise对象
      }else{
        ctx.body = { code: 2, msg: '用户名不存在' }
      }
    // })
})
// register的接口
koaRouter.post('/register', async (ctx) => {
  // eslint-disable-next-line no-console
  console.log(ctx.query.username)
  const { username,password } =ctx.query
  try {
    let user = await Users.findOne({username});
    if (user) {
      ctx.body = {status: 1, msg: '此用户已存在'};
      return;
    }
    user = await Users.create({username, password});
    ctx.body={
      status: 0,
      data: {
        username, _id: user._id
      }
    };
  } catch (error) {

    ctx.body ={status: 1, msg: '注册用户失败'};
  }

})
/

/*
发送验证码短信
*/
koaRouter.get('/sendcode', (ctx) =>{
  //1. 获取请求参数数据
  let phone = ctx.query.phone;
  // eslint-disable-next-line no-console
  console.log(phone)
  //2. 处理数据
  //生成验证码(6位随机数)
  let code = sms_util.randomCode(6);
  //发送给指定的手机号
  // eslint-disable-next-line no-console
  console.log(`向${phone}发送验证码短信: ${code}`);
  sms_util.sendCode(phone, code, function (success) {
    // eslint-disable-next-line no-console
    console.log(success)
    if (success) {
      users[phone] = code
      // eslint-disable-next-line no-console
      console.log('保存验证码: ', phone, code)
      ctx.body = { code: 0 }
    } else {
      //3. 返回响应数据
      ctx.body= { code: 1, msg: '短信验证码发送失败' }
    }
  })
  // ctx.body ='2222'
})
// 使用koa的路由相关的方法
koa
  .use(koaRouter.routes())//声明可以使用所有的路由
  .use(koaRouter.allowedMethods())//声明可以使用路由中所有的方法
// 监听端口号
koa.listen('4000',(err)=>{
  // eslint-disable-next-line no-console
  if(!err) console.log('服务器启动成功，http://localhost:4000')
  // eslint-disable-next-line no-console
  else console.log(err)
})