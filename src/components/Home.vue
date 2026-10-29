<template>
  <div>
    <div class="search-bar">
      <el-icon class="search-icon"><Search /></el-icon>
      <input type="text" class="search-text" placeholder="请输入想要搜索的视频名称" />
    </div>
    
    <span class="title1"> 视频类型分布 </span>
    <span class="title1"> 精华消息 </span>
    <span class="title2"> 平台创作者：@我自人间折枝春    创作者声明：此平台仅由个人兴趣而产生，安全性不高，请勿上传真实信息。欢迎在留言板提出建议，请勿涉及人身攻击等违法行为。 </span>

  </div>
</template>

<script setup>
</script>

<style scoped>
.search-bar {
  width: 100%;
  height: 50px;
 
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;  /* 让搜索图标和输入框垂直居中 */
}

.search-icon {
  font-size: 20px;
  color: gray;

  margin-left: 20px;
}

.search-text {
  font-size: 14px;
  color: gray;

  /* 让输入文字周围的一圈默认的黑框消失，并且让输入框的宽高撑满搜索框 */
  border: none;
  outline: none;
  width: 100%;
  height: 100%;

  padding-left: 20px;
}

.title1 {
  font-size: 20px;
  font-weight: bold;
  color:black;
  display: block;
  margin-top: 20px;
}

.title2 {
  font-size: 14px;
  color:gray;
  display: block;
  margin-bottom: 20px;
}
</style>