import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. 引入路由配置
import router from './router/index.js' 

// 2. 引入 Element Plus 样式和核心库
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

// 3. 引入所有的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 4. 先创建 app 实例
const app = createApp(App)

// 5. 在 app 里面装插件
app.use(router)
app.use(ElementPlus)

// 6. 循环把所有的图标注册为全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 7. 挂载应用
app.mount('#app')
