// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Afflatus from '../pages/Afflatus/Afflatus.vue'
import News from '../pages/News/News.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Mine from '../pages/Mine/Mine.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import One from '../pages/Afflatus/One/One.vue'
import Two from '../pages/Afflatus/Two/Two.vue'
import Three from '../pages/Afflatus/Three/Three.vue'
import AfflatusContent from '../pages/Afflatus/AfflatusContent/AfflatusContent.vue'

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
    children:[
      {
        path:'/afflatus/one',
        component: One,
        meta: {
          isShowFooter: true
        }
      },
      {
        path:'/afflatus/two',
        component: Two,
        meta: {
          isShowFooter: true
        }
      },
      {
        path:'/afflatus/three',
        component: Three,
        meta: {
          isShowFooter: true
        }
      },
      {
        path:'/afflatus',
        redirect:'/afflatus/one'
      }
    ],
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/afflatus_content',
    component:AfflatusContent
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