<template>
  <div id="app">
  <nav>
   <div class="nav-left">
    <router-link class="clear-li" to="/"><li class="li-noty">首页</li></router-link>
    <router-link to="/skillPage"><li>技能</li></router-link>
    <router-link to="/educationPage"><li>教育</li></router-link>
    <router-link to="/worksPage"><li>作品</li></router-link>
    <li>评价</li>
    
   </div>
   <div class="nav-right">
   <img src="./assets/photo.jpg">
   <router-link to="/loginPage"><li>登录</li></router-link>
   <router-link to="/aboutPage"><li>关于</li></router-link>
   
   </div>
   </nav>
     
     <router-view></router-view>
     <footer class="flex flex-c bg-bla-cl-wi">
       <div class="flex-2 ra-8px"><ul>
        <li>作者：陈林</li>
        <li>版本号：1.0</li>
        <li>制作日期：2024/9/19</li>
        <li>作品：个人简历</li>
       </ul>
      </div>
      <div class="flex-2 ra-8px"><ul>
        <li>作者：陈林</li>
        <li>版本号：1.0</li>
        <li>制作日期：2024/9/19</li>
        <li>作品：个人简历</li>
       </ul>
      </div>
      <div class="flex-2 ra-8px"><ul>
        <li>作者：陈林</li>
        <li>版本号：1.0</li>
        <li>制作日期：2024/9/19</li>
        <li>作品：个人简历</li>
       </ul>
      </div>

     </footer>
  </div>
</template>

<script>






export default {
  name: 'App',
  components: {
     
  },
  date(){
    return{
      imgList: [
                {id:0,idView:'./assets/photo.jpg'},
                {id:1,idView:'./assets/photo.jpg'},
                {id:2,idView:'./assets/photo.jpg'},
                {id:3,idView:'./assets/photo.jpg'} 
      ],
                  
      

    }
  },
  created(){
      
  }
}
</script>

<style scoped>
.flex{
  display: flex;
}
.flex-2{
  flex: 2;
}


p{
  display: inline;
  background: './assets/logo.png'
}
.big-image{
  height: 200px;
  width: 200px;
}
/* 轮播图的样式 */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }



/* 头像的样式 */
img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
img:hover{
  transform: translatey(-2px);
}
p{
  margin-top: 888px;
}
lkk{
  height: 50px;
}
/* nav布局样式 */
nav{
 
 
  height: 38px;
  width: 60%;
  background-color: rgb(2, 11, 11);
  margin: 0 auto;
  padding-top: 10px;
  color: aliceblue;
 
}
.nav-left{
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-right{
  display: flex;
  justify-content: center;
  align-items: center;
  float:right;
}
li{
  list-style: none;
  margin-left: 10px;
  margin-right: 10px;
}
li:hover{
  color: red;
  opacity: 0.9;
  cursor: pointer;
}

</style>
