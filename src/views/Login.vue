<template>
   <div class="loginCons">
     <h3>vuetest</h3>
     <form action="">
       <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
       <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
       <mt-field label="验证码" v-model="captcha">
         <img src="../assets/logo.png" height="45px" width="100px">
       </mt-field>
       <mt-button type="primary" size="large" @click="login">登录</mt-button>
     </form>
   </div>
</template>
<script>
   export default{
     data(){
       return{
         username:'',
         password:'',
         captcha:''
       }
     },
     methods:{
       login(){
         this.$router.push({ path: '/cons' });
       }
     }
   }
</script>
<style scoped lang="scss">
   @import '../assets/style/market.scss';
   .loginCons{
     .mint-button--large{
       margin-top: 30px;
     }
   }
</style>
