<template>
 <div>
   <div>
   <!--  顶部的导航栏 -->
     <div class="topnav">
      <img src="../assets/logo.png">
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
     <div class="flex-c">
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
        <p>14</p>
    </div>

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
            xihuanlist:['iconfont icon-xihuan','iconfont icon-xihuan1'],
            pinglunnum:45,
            xihuannum:45,
            shoucangnum:45,
            pinglunClicknum:1,
            xihuanClicknum:1,
            shoucangClicknum:1
        }
    },
    methods:{
        changePinglun(){
            if(this.clicknum){
                this.pinglun='iconfont icon-pinglun'
                this.pinglunnum+=1
                this.clicknum=false
            }else{
                this.pinglun='iconfont icon-pinglun'
                this.pinglunnum-=1
                this.clicknum=1
            }
            
        },
        changeXihuan(){
            if(this.xihuanClicknum==1){
                this.xihuan=this.xihuanlist[0]
                this.xihuannum+=1
                this.xihuanClicknum=0
                console.log(this.xihuan)
            }else{
                this.xihaun=this.xihuanlist[1]
                this.xihuannum-=1
                this.xihuanClicknum=1
                console.log(this.xihuan)
            }
            
        },
        changeShoucang(){
            if(this.shoucangClicknum){
                this.shoucang='iconfont icon-shoucang'
                this.shoucangnumnum+=1
                this.shoucangClicknum=false
            }else{
                this.pinglun='iconfont icon-shoucang1'
                this.shoucangnum-=1
                this.shoucangClicknum=true
            }
            
        }

    }

}
</script>
<style>
.flex-c{
    display: flex;

}
.flex-1{
    flex-grow: 1;
}

</style>