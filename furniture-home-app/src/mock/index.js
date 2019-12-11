// 引入mock
import Mock from 'mockjs'
// 引入data数据
import data from './data.json'
// 拦截ajax请求，生产随机数据
Mock.mock('/afflatus', { code: 0, data: data.afflatus })
Mock.mock('/categorys', { code: 0, data: data.categorys })