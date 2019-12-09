// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Afflatus from '../pages/Afflatus/Afflatus.vue'
import News from '../pages/News/News.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Mine from '../pages/Mine/Mine.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'

export default [
  {
    path:'/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/afflatus',
    component: Afflatus,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/news',
    component: News,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/shopcart',
    component: ShopCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/mine',
    component: Mine,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/register',
    component: Register
  },
  {
    path:'/',
    redirect:'/home'
  },
]