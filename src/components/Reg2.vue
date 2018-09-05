<template>
  <div v-if="isShow">
        <div class="reg2">
           <div class="title">添加头像及昵称</div>
           <div class="head-img">
              <img src="">
          </div>
           <div class="name-input">
              <h5>昵称<i>*</i></h5>
              <input type="text" v-model="user.username" placeholder="请输入昵称"></div>
           <div class="btn" @click="register2">确定</div>
        </div>
  </div>

</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      user:{
        username:'',
        headshot:''
      }
    }
  },

  methods: {
    register2(){
      this.$emit('has-log',this.user)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .reg2{
    padding: 0 20px;
  }
  .reg2 .title{
    text-align:center;
    font-size: 18px;
    font-weight: 600;
  }
  .reg2>.head-img{
    margin:25px auto 35px;
    width: 165px;
    height: 165px;
    background-image: url(../img/background/defaulthead.png);
    background-size: cover;
    box-shadow: 1px 1px 20px;
    border-radius: 50%;
    cursor: pointer;
  }

  .reg2 .name-input h5 i{
      color: #ed7266;
  }
  .reg2 input[type="text"]{
    display: block;
    margin: 10px 0 27px;
    padding: 12px 8px;
    width: 250px;
  }
  .reg2 .btn{
    padding: 12px 10px;
    color: #fff;
    text-align: center;
    background: #0066ff;
    border-radius: 23px;
    cursor: pointer;
  }
</style>
