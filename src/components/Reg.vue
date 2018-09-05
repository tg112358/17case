<template>
  
        <div v-if="isShow">
           <h3>用户注册</h3>

          <div class="phone-prefix removefloat" >
            <div>+86</div>
            <input type="text"  v-model="user.usernameModel" placeholder="请输入手机号">
             <span class="input-tips">{{ userErrors.errorText }}</span> 
          </div>

           <div class="verifyCodeInput removefloat"> 
         <div>
            <input type="text" v-model="yzm" placeholder="证明你不是机器人">
            <img class="yzm" src="">
            <a class="reflash" href=""></a>
         </div>
<!--             <span class="input-tips">{{ userErrors.errorText }}</span> -->
           </div> 

           <div class="removefloat"> 
            <div class="input-group">
            <input class="first-child" type="text" v-model="messageyzm" placeholder="请输入短信验证码">
            <input class="last-child" type="button" value="获取验证码">
            </div>
<!--             <span class="input-tips">{{ userErrors.errorText }}</span> -->
           </div>

         <div class="removefloat"> 
          <input type="password" v-model="user.passwordModel" placeholder="请输入密码">
             <span class="input-tips">{{ passwordErrors.errorText }}</span> 
           </div>

          <div class="check-box removefloat">
            <label class="check-box">
              <input class="checkbox" type="checkbox" v-model="checked">我已阅读并同意
              <a href="" style="color: #426ab3">《用户协议》</a>
            </label>
           </div>

    <div class="register-btn" @click="onregister"><a>注册</a></div>
        <p>{{ errorText }}</p>
        </div>

</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    user:{
    usernameModel:'',
    passwordModel:'',
    },
    yzm:'',
    messageyzm:'',
    errorText:'',
    checked:false,
    }
  },
   computed: {
    userErrors () {
      let errorText, status,pattern
      pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
      if(!pattern.test(this.user.usernameModel)) {
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
      let errorText, status,pattern
      pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
      if (!pattern.test(this.user.passwordModel)) {
        status = false
        errorText = '密码不得小于6位且不得为纯数字、字母'
      }
      else if(/^[0-9A-Za-z]{10,}$/.test(this.user.passwordModel)){
        status = false
        errorText = '密码不得大于10位'
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
    onregister () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过'
      }else if (!this.checked) {
        this.errorText = '请阅读《用户协议》'
      }
      else {
        let user = { mobile:this.user.usernameModel,password:this.user.passwordModel}
        this.errorText = ''
        let formData = JSON.stringify(user);  
        this.$http.post('http://www.17case.cn:80/case/index.php?action=register',formData)
        .then((res) => {
          //console.log(res)
          if(res.data.code==-1){
            this.errorText = '用户名已存在'
          }else{
            this.$emit('has-log', res)
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
  h3{
    text-align: center;
    margin-bottom: 15px;
  }

  input[type=text],input[type=password]{
    color: #333;
    border: 1px solid #426ab3;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    border-radius:2px;
    padding: 12px;
    margin:9px 0;
  }
  .phone-prefix{
    position: relative;
  }
  .phone-prefix div{
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-right: 1px solid #426ab3;
    position: absolute;
    top: 10px;
    left: 1px;
  }
  .phone-prefix input[type=text]{
    width: 234px;
    padding-left: 58px; 
  }
  .input-tips{
    color: #426ab3;
    margin-top: -3px;
    display: block;
  }
  .verifyCodeInput input {
    float: none;
    display: inline;
    width: 137px;
    margin-right: 6px;
  }
  .verifyCodeInput .yzm {
    width: 100px;
    height: 46px;
    vertical-align: top;
    display: inline;
    margin: 10px 0;
  }
  .input-group {
    position: relative;
  }
  .input-group .first-child{
    width: 183px;
    padding-right: 108px;
  }
  .input-group .last-child{
    position: absolute;
    right: 6px;
    top:14px;
    width: 90px;
    height: 37px;
    color: #426ab3;
    line-height: 37px;
    text-align: center;
    background: #e8f6f1;
    font-size: 12px;
    border: 0;
  }
  .input-group .last-child:focus{
    outline: none;
  }
  input[type=password]{
    width: 280px;
  }
  .check-box a:hover{
    text-decoration: underline;
  }
 .register-btn{
    height: 46px;
    width: 100%;
    background: #426ab3;
    font-size: 16px;
    color: #fff;
    line-height: 46px;
    text-align: center;
    -webkit-border-radius: 23px;
    -moz-border-radius: 23px;
    border-radius: 23px;
    margin: 18px 0;
  }

    .register-btn:hover{
    cursor: pointer;
  }
</style>
