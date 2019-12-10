// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Afflatus from '../pages/Afflatus/Afflatus.vue'
import News from '../pages/News/News.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Mine from '../pages/Mine/Mine.vue'
import Fine from '../pages/Mine/Fine/Fine.vue'
//b
export default [
  {
    path:'/home',
    component: Home
  },
  {
    path:'/afflatus',
    component: Afflatus
  },
  {
    path:'/news',
    component: News
  },
  {
    path:'/shopcart',
    component: ShopCart
  },
  {
    path:'/mine',
    component: Mine
  },
  {
    path:'/fine',
    component:Fine
  },
  {
    path:'/',
    redirect:'/home'
  },
]