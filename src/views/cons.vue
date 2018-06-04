<template>
  <div class="tableCons">
     <fieldset>
       <legend>用户管理系统</legend>
       <div>
         <mt-field label="姓名：" placeholder="请输入用户名" v-model="newStudents.name"></mt-field>
       </div>
       <div>
         <mt-field label="年龄：" placeholder="请输入年龄" v-model="newStudents.age"></mt-field>
       </div>
       <div class="radio clearfix">
         <span>性别：</span>
         <select name="" id="" v-model="newStudents.sex">
           <option value="男">男</option>
           <option value="女">女</option>
         </select>
       </div>
       <div>
         <mt-field label="电话：" placeholder="请输入联系方式" type="tel" v-model="newStudents.phone"></mt-field>
       </div>
       <div>
         <mt-button type="primary" @click="addUser" size="large">创建用户</mt-button>
       </div>
     </fieldset>
    <table>
      <thead>
        <tr>
          <td>姓名</td>
          <td>年龄</td>
          <td>性别</td>
          <td>电话</td>
          <td>删除</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pon , index) in persons">
          <td>{{pon.name}}</td>
          <td>{{pon.age}}</td>
          <td>{{pon.sex}}</td>
          <td>{{pon.phone}}</td>
          <td>
            <mt-button type="danger"  size="small"  @click="deleteUser(index)">删除</mt-button>
          </td>
        </tr>
      </tbody>
    </table>

    <mt-button type="primary"   @click="nextPage">下一页</mt-button>
  </div>
</template>

<script>
    export default {
        name: "cons",
      data(){
          return{
            persons:[
              {name:'黎明',age:16,sex:'男',phone:'18734568765'},
              {name:'甜心',age:16,sex:'女',phone:'18734568765'},
              {name:'果果',age:16,sex:'男',phone:'18734784933'},
              {name:'萌萌',age:16,sex:'女',phone:'18323455833'}
            ],
            newStudents:{name:'',age:'0',sex:'男',phone:''}
          }
      },
      methods:{
        addUser(){
          if(this.newStudents.name == ''){
             alert('请输入姓名');
             return;
          }
          if(this.newStudents.age <= 0){
            alert('请输入正确的年龄');
            return;
          }
          let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
          if(!myreg.test(this.newStudents.phone)){
            alert('请输入正确的手机号码');
            return;
          }
          this.persons.unshift(this.newStudents);
          this.newStudents={name:'',age:'0',sex:'男',phone:''}
        },
        deleteUser(index){
          this.persons.splice(index,1)
        },
        nextPage(){
          this.$router.push({ path: '/test' });
        }
      }

    }
</script>

<style lang="scss">
  .tableCons{
    margin: 10px;
    fieldset{
      input , select{
        margin: 10px 0;
        height:30px;
        width:60%;
        border:none;
      }
      .mint-button--primary{
        margin-top: 20px;
      }
      .radio{
        background: #fff;
        span{
          padding-left: 10px;
          width:105px;
          display:inline-block;
        }
      }
    }
    table{
      border-collapse: collapse;
      width:100%;
      text-align: center;
      margin-top: 20px;
      background: #fff;
      thead{
       font-weight: bold;
      }
      td{
        border:1px solid #ddd;
        height:50px;
      }
    }
  }
</style>
