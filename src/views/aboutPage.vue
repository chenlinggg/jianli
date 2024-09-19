<template>
    <div>
        <div class="flex-c">
         <h1>关于本网页开发遇到的说明</h1>
         <h2>网站主要的组成部分：</h2>
         <p>1.首页</p>
         <p>2.技能</p>
         <p>3.教育</p>
         <p>4.作品</p>
         <p>5.评价</p>
         <p>6.登录</p>
         <p>7.关于</p>
         <h2>网站开发用到的技术:</h2>
         <p>1.网站主要用到vue中的VueRouter</p>
         <p>2.网站主要引入了element-ui加快了网站的开发，比如轮播图用到了轮播图组件</p>
         <h2>网站开发遇到的问题:</h2>
         <p>1.路由的设计错误，导致了组件重复渲染</p>
         <p>2.渲染组件时，src的属性绑定一个变量时，要用require()的方法来将图片的路径进行转换，否则会导致渲染不出组件</p>
        </div>
       
    </div>
   
   
   </template>
   <script>
   export default{
       name:'aboutPage',
       data(){
          return{
            srcImage:[{id:2,idView:require("../assets/logo.png")}],
            
          }
       }
   
   }
   </script>
   <style>
   
   
   </style>