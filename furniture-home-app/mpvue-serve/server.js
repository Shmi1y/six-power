// 引入Koa
const Koa = require('koa')
// 引入KoaRouter
const KoaRouter = require('koa-router')
// 实例化Koa
let koa = new Koa()
// 实例化KoaRouter
let koaRouter = new KoaRouter()
require('./db');
// const sms_util = require('./util/sms_util')
// 引入detas数据
// let datas = require('./datas/data.json')
// const Users = require('./models/users');
//接口
// search的接口
// koaRouter.get('/search',(ctx) => {
//   const result = ctx.query.searchText
//   console.log(result)
//   ctx.body = datas
// })
// register的接口
koaRouter.post('/register', async (ctx) => {
  // eslint-disable-next-line no-console
  console.log(ctx.query.username)
  // const {username,password}= ctx.query.req
  // eslint-disable-next-line no-console
  // console.log(username,password)
  // const{username，password} = result
  // eslint-disable-next-line no-console
  // console.log(username,password)
  ctx.body="aaa"
  // try {
  //   let user = await Users.findOne({username});

  //   if (user) {
  //     ctx.json({status: 1, msg: '此用户已存在'});
  //     return;
  //   }

  //   user = await Users.create({username, password});

  //   ctx.json({
  //     status: 0,
  //     data: {
  //       username, _id: user._id
  //     }
  //   });
  // } catch (error) {

  //   ctx.json({status: 1, msg: '注册用户失败'});
  // }

})
// login的接口
//koaRouter.get('/login',(ctx) => {
  //const result = ctx.query.req
  //console.log(result)
  //ctx.body= "哈哈哈哈"
//})

/*
发送验证码短信
*/
// koaRouter('/sendcode', (ctx) =>{
//   //1. 获取请求参数数据
//   var phone = ctx.query.phone;
//   //2. 处理数据
//   //生成验证码(6位随机数)
//   var code = sms_util.randomCode(6);
//   //发送给指定的手机号
//   //console.log(`向${phone}发送验证码短信: ${code}`);
//   sms_util.sendCode(phone, code, function (success) {//success表示是否成功
//     if (success) {
//       users[phone] = code
//       //console.log('保存验证码: ', phone, code)
//       ctx.send({ "code": 0 })
//     } else {
//       //3. 返回响应数据
//       ctx.send({ "code": 1, msg: '短信验证码发送失败' })
//     }
//   })
// })
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