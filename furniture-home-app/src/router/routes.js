// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Afflatus from '../pages/Afflatus/Afflatus.vue'
import News from '../pages/News/News.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Mine from '../pages/Mine/Mine.vue'
import Fine from '../pages/Mine/Fine/Fine.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import Detalis from '../pages/Detalis/Detalis.vue'
import Card from '../pages/Mine/Card/Card.vue'
import Receiving from '../pages/Mine/Receiving/Receiving.vue'
import Contact from '../pages/Mine/Contact/Contact.vue'
import Address from '../pages/Mine/Address/Address.vue'
import Setting from '../pages/Mine/Setting/Setting.vue'

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
    path:'/detalis',
    component:Detalis
  },
  {
    path:'/fine',
    component:Fine
  },
  {
    path:'/card',
    component:Card
  },
  {
    path:'/receiving',
    component:Receiving
  },
  {
    path:'/contact',
    component:Contact
  },
  {
    path:'/address',
    component:Address
  },
  {
    path:'/setting',
    component:Setting
  },
  {
    path:'/',
    redirect:'/home'
  },
  
]