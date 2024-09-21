<template>
  <div class="login">
  <div class="logincard">
    <h1>登录页面</h1>
    <from action="#" class="flex-col-center">
    <div class="flex"><label>姓名</label><input placeholder="输入姓名"  type="email" v-model="name"></div>
    <div class="flex"><label>密码</label><input placeholder="输入密码" type="password" v-model="password"></div>
    <button class="btn txt-center" >提交</button>
   <button class="btn">重置</button>
  </from>
  </div>

  </div>
</template>

<script>
      
export default{
    name:'loginPage',
    data(){
        return{
            name:'',
            password:''
        }
    },
    updated(){
        console.log(this.name)
        console.log(this.password)
    }

}

</script>
<style>
.logincard{
    background-color: beige;
    opacity: 0.7;
    border-radius: 5px;
    height: 200px;
    padding: 12px;
}
label{
    width: 30%;
}
input{
    width: 60%;
}
*{
    padding: 0px;
    margin: 0px;
}
.hight-12{
    height: 12px;
}
.flex{
    display: flex;
    flex-wrap: nowrap;
    margin-top: 2px;
}
/* flex布局占2*/
.flex-2{
      flex: 6;
} 
/* flex布局占6*/
.flex-6{
      flex: 6;
} 
h1{
    text-align: center;
    opacity: 0.8;
    font-weight: 500;
}
.login{
    width: 60%;
    height: 500px;
    margin: 0 auto;
    background-image: linear-gradient(25deg,rgb(0, 191, 255),#31c1bc);
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;

}
.txt-center{
     text-align: center;
}
.flex-col-center{
    width: 70%;
    margin: 0 auto;
   display: flex;
   overflow: hidden;
   flex-direction: column;


}
.btn{
    border: 1px solid #000;
    border-radius: 1rem;
  
   width: 4rem;
    background-color:rgb(0, 0, 0);
    color:white;
    transform: translate(42px);
    margin-top: 5px;
}

</style>