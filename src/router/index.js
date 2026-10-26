import { createRouter, createWebHistory } from 'vue-router'  //从 Vue Router 这个工具箱里，借出createRouter（路由生成器）和 createWebHistory（历史记录模式）

// 引入六个跳转页面
import Home from '../components/Home.vue'
import Video from '../components/Video.vue'
import Message from '../components/Message.vue'
import User from '../components/User.vue'
import Setting from '../components/Setting.vue'
import Notice from '../components/Notice.vue'

const routes = [
  { path: '/', redirect: '/home' },  // 默认打开就跳到首页
  { path: '/home', component: Home },
  { path: '/video', component: Video },
  { path: '/message', component: Message },
  { path: '/user', component: User },
  { path: '/setting', component: Setting },
  { path: '/notice', component: Notice }
]

const router = createRouter({
  history: createWebHistory(),   // 配置1：网址模式（去掉#号
  routes: routes  // 配置2：把上面写好的页面路线图塞进来
})

export default router  // 把造好的导航仪导出，让其他代码使用
