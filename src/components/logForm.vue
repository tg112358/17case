<template>
  
        <div>
           <h3>用户登录</h3>
         <div class="removefloat"> 
          <input type="text" v-model="usernameModel" placeholder="请输入用户名" >
            <span class="input-tips">{{ userErrors.errorText }}</span>
           </div>



         <div class="removefloat"> 
          <input type="password" v-model="passwordModel" placeholder="请输入密码" >
<!--           autocomplete="new-password"
 -->            <span class="input-tips">{{ passwordErrors.errorText }}</span>
           </div>


          <div class="forgot removefloat" >
            <a class="forgot-pwd" href="">忘记密码</a>
          </div>
          <div class="login-btn" @click="onLogin"><a  >登录</a></div>
        <p>{{ errorText }}</p>
        </div>

</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: '', 
    }
  },
  computed: {
    userErrors () {
      let errorText, status,pattern
      pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
      if(!pattern.test(this.usernameModel)) {
        status = false
        errorText = '请输入有效手机号'
      }
      else  {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return { 
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码不是1-6位'
      }
      else {
        status = true
        errorText = ''
      }
       if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过'
      }
      else {
        var user = { mobile:this.usernameModel,password:this.passwordModel}
        this.errorText = ''
        var formData = JSON.stringify(user); 
        this.$http.post('http://www.17case.cn:80/case/index.php?action=login',formData)
        .then((res) => {
          console.log(res)
          if(res.data.code==1){
            this.$emit('has-log', res.data)
            }else{
             this.errorText = '账号或密码错误'
             }
        }, (error) => {
          console.log(error)
        })
      }
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-btn:hover{
    cursor: pointer;
  }
  h3{
    text-align: center;

  }
   input[type=text],input[type=password]{
    width: 280px;
    color: #333;
    border: 1px solid #426ab3;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    border-radius:2px;
    padding: 12px;
    margin:9px 0;
  }
  .forgot a{
    float: right;
    color: #426ab3;
    margin: 5px 0 0;
  }
  .login-btn{
     height: 46px;
    width: 100%;
    background:  #0066ff;
    font-size: 16px;
    color: #fff;
    line-height: 46px;
    text-align: center;
    -webkit-border-radius: 23px;
    -moz-border-radius: 23px;
    border-radius: 23px;
    margin: 18px 0;
  }
    .input-tips{
    color: #426ab3;
    margin-top: -3px;
    display: block;
  }
</style>
