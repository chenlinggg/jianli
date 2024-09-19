<template>
  <div>
    <el-carousel height="550px">
      <el-carousel-item  v-for="item in carouselImages" :key="item.id">
       <img class="carouselimg" :src="item.idView">
      </el-carousel-item>
    </el-carousel>
     <div>
     <div>
    <h1 class="txt-c">欢迎来到我的空间</h1>
     </div>
      <p class="wt-c">个人的兴趣爱好</p>
      <h3 class="wt-c">跑步</h3>
      <div class="wt-c" v-for="item in srcImages" :key="item.id">
        <div class="fl-wrap po-rlt">
        <img :src="item.idView">
       <div class="scoreCard txt-c">{{ item.score }}</div>
      </div>
      </div>
     </div>
  </div>
  
</template>
<script>



export default{
      name:"homePage",
      data(){
        return{
          /* 轮播图的图片 的资源*/
         carouselImages:[{id:"1",idView:require("../image/scrollPictures1.jpg")},
          {id:"2",idView:require("../image/scrollPictures2.jpg")},
          {id:"3",idView:require("../image/scrollPictures3.jpg")},
          {id:"4",idView:require("../image/scrollPictures4.jpg")}
          ],
          /* 下面的小卡片的数据 */
          srcImages:[{id:"1",score:"8分",idView:require("@/assets/logo.png")},
          {id:"2",score:"9分",idView:require("@/assets/logo.png")},
          {id:"3",score:"8分",sidView:require("@/assets/logo.png")},
          {id:"4",score:"9分",idView:require("@/assets/logo.png")}
          ]
          
          
        }
      },
      methods:{
        jumppage(item){
             console.log(item.idView)
             
        }
      },updated(){
        this.$refs.name.src = this.srcImages.idView;
      }



}


</script>

<style>
.carouselimg{
   width: 100%;
   height:700px;
   
}
.bg-test{
  width: 100px;
  height: 52px;
  border: 1px solid red;
}
 .po-rlt{
  position: relative;
 }
 /* 评分的小卡片 */
.scoreCard{
  height: 30px;
  width: 10%;
  background-color: aqua;
  opacity: 0.7;
  z-index: 2;
  position: absolute;
  border-radius: 10px;
  left: 0%;
  overflow:hidden;

}
/* 文字居中 */
.txt-c{
  text-align: center;
  opacity: 0.9;
  
}
/* 设置margin为2px */
.mg-2{
  margin: 2px;
}
/* flex布局，装不下换行 */
.fl-wrap{
  display: flex;
  flex-wrap: wrap;
  
}
/* 小卡片的设置样式 */
.imgcard{
  width: 32%;
  height: 350px;
}
/* 设置圆角为5px */
.br-5{
  border-radius: 5px;
}
.block{
 
  margin-top: 3px;
  
 
 
}
.wt-c{
  width: 60%;
  margin: 0 auto;
}
.el-carousel{
  width: 60%;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 10px 10px 10px rgba(146, 143, 143,1);

}


  
</style>