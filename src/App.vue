<template>
  <div class = "app">

    <div class = "menu-bar">

      <!-- 菜单栏列表-->
       <ul class = "menu-list">
        <div class = "main-fuctional">
          <span class = "title"> 主要功能区 </span>
          <router-link to="/home" class="menu-item">         
            <el-icon class="icon"><House /></el-icon><span> 首页 </span>       
          </router-link>    
          <router-link to="/video" class="menu-item">         
            <el-icon class="icon"><VideoCamera /></el-icon><span> 视频区 </span>        
          </router-link>        
          <router-link to="/message" class="menu-item">         
            <el-icon class="icon"><ChatDotRound /></el-icon><span> 留言板 </span>       
          </router-link>        
        </div>

        <div class = "auxiliary-fuctional">
          <span class = "title"> 辅助功能区 </span>
          <router-link to="/user" class="menu-item">       
            <el-icon class="icon"><User /></el-icon><span> 用户 </span>      
          </router-link>
        <router-link to="/setting" class="menu-item">
          <el-icon class="icon"><Setting /></el-icon><span> 设置 </span>
        </router-link>
        <router-link to="/notice" class="menu-item">
          <el-icon class="icon"><Bell /></el-icon><span> 通知 </span>
        </router-link>
        </div>
       </ul>

    </div>

    <div class="main-content">
      <router-view></router-view>  <!-- 这是一个占位符，可以不断被不同的页面组件替换 -->
    </div>
    
  </div>
</template>

<script setup>

</script>

<!-- 如果用style scoped,那么里面所有的样式只会对当前组件生效 -->
<style scoped>
/* 1、整体布局样式 */
.app {
  display: flex;  /* 让菜单栏和内容区横向排列 */
  min-height: 100vh;
}

/* 2、菜单栏样式 */
.menu-bar {
  width: 250px;
  height: 100vh;
  background: linear-gradient(180deg, rgba(42, 130, 228, 1) 0%, rgba(40, 126, 224, 0.64) 100%);
  box-shadow: 0px 2px 5px rgba(83, 97, 255, 0.05);  /* 水平偏移量、 垂直偏移量、模糊半径、颜色 */
  
  position: fixed;  /* 固定定位，让它永远贴在屏幕左侧 */
  left: 0;
  top: 0;
  z-index: 100; /* 保证它在最上层，不被内容挡住 */
  
  padding: 30px 20px;  /* 上下内边距40px，左右内边距20px */
  /* padding: 0px 0px 0px 0px; 意思是上、右、下、左 */

  box-sizing: border-box;
  color: white;  /* 文字默认设为白色 */
}

/* 菜单列表重置 */
.menu-list {
  padding: 0;  /* 去掉默认的内边距 */
  margin: 0;  /* 去掉默认的外边距 */
  list-style: none;  /* 去掉默认的列表样式 */
}

/* 菜单项样式 */
.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 10px;
  cursor: pointer;  /* 鼠标悬停时显示手型 */
  font-size: 16px;
  transition: background 0.2s;  /* 过渡动画 */
 
  text-decoration: none;   /* 去掉 a 标签默认的下划线和蓝色 */
  color: white; 
}

.menu-item .icon {
  margin-right: 15px;
  font-size: 20px;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Vue Router 会自动给当前选中的页面加上这个类名，不用 v-if 判断 */
.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: bold;  /* 让当前选中的菜单项加粗 */
}

.main-fuctional {
  padding-top: 50px; 
}

.auxiliary-fuctional {
  padding-top: 50px; 
}

.title {
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
  display: block;  /* 让它独占一行 */
  font-weight: bold;
}

.main-content {
  margin-left: 250px;  /* 让出菜单栏的宽度 */
  padding: 40px; 
  flex: 1;  /* 让内容区占据剩余空间 */
}
</style>
