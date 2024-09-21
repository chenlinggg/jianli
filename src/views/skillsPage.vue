<template>

   <div class="box flex-c">
   <!--  顶部的导航栏 -->
     <div class="topnav flex">
      <img class="smalleImg" src="../assets/logo.png">
      <div>
        <h1>陈林</h1>
        <p>学习前端的技术</p>
      </div>
      <button>...</button>
     </div>


     <!-- 中间的图片的空间 -->
     <div>
     <img src="../assets/logo.png">
     </div>


     <!-- 底部的导航 -->
     <div class="flex">
      <div class="flex-1" @click="changePinglun">
        <i :class="pinglun"></i>
       <p>{{ pinglunnum }}</p>
      </div>
      <div class="flex-1">
        <i :class="xihuan" @click="changeXihuan"></i>
        <p>{{ xihuannum }}</p>
    </div>
    <div class="flex-1">
        <i :class="shoucang" @click="changeShoucang"></i>
        <p>{{ shoucangnum }}</p>
    </div>

     </div>




   </div>



</template>
<script>
export default{
    name:'skillPage',
    data(){
        return{
            pinglun:'iconfont icon-pinglun',
            xihuan:'iconfont icon-xihuan1',
            shoucang:'iconfont icon-shoucang1',
            pinglunnum:45,
            xihuannum:45,
            shoucangnum:45,
            pinglunClicknum:1,
            xihuanClicknum:1,
            shoucangClicknum:1,
            xhoje :{
                srcImage:'iconfont icon-xihuan1',
                xihuannum:45,
                xihuanClicknum:1
            }
        }
    },
    methods:{
        changePinglun(){
            if(this.clicknum){
                this.pinglun='iconfont icon-pinglun'
                this.pinglunnum+=1
                this.clicknum=true
            }else{
                this.pinglun='iconfont icon-pinglun'
                this.pinglunnum-=1
                this.clicknum=1
            }
            
        },
        /* 喜欢的逻辑 */
        changeXihuan(){
            if(this.xhoje.xihuanClicknum==1){
                this.$set(this.$data.xhoje,'xihuan','iconfont icon-xihuan')
                this.xhoje.xihuannum+=1
                this.xhoje.xihuanClicknum=0
            }else{
                this.$set(this.$data.xhoje,'xihuan','iconfont icon-xihuan1')
                this.xhoje.xihuannum-=1
                this.xhoje.xihuanClicknum=1
            }
            
        },
        /* 收藏的逻辑 */
        changeShoucang(){
            if(this.shoucangClicknum==1){
                this.$set(this.$data,'shoucang','iconfont shoucang')
                this.shoucangnumnum+=1
                this.shoucangClicknum=0
                console
                
            }else{
                this.$set(this.$data,'shoucang','iconfont shoucang1')
                this.shoucangnum-=1
                this.shoucangClicknum=1
               
            }
            
        }

    }

}
</script>
<style>
.box{
    width: 250px;
  
    border:1px solid red;
    background-color:#defcf9;
}
.smalleImg{
    height: 30px;
    width: 30px;

}
h1{
    font-size: medium;
    transform: translateX(-25px);
}
p{
    font-size: small;
   
}
.flex{
    display: flex;
    background-color:#cadefc; 
    border-radius: 2px;

}
.flex-2{
    flex-grow: 2;
}

.flex-5{
    flex-grow: 5;
}
.flex-1{
    flex-grow: 1;
}

</style>