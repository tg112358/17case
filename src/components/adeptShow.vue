<template>
  <div class="adept" v-if="isShow">
      <div class="has-data">
        <ul>
          <li v-for="item in tecdata">{{item.name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
	/*父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。*/
  props: {
      isShow: {
        type: Boolean,
        default: false
        }
  },
  data () {
    return {
      tecdata:[
      {name:'LOGO设计'},
      {name:'稿件写作/发布'},
      {name:'创意方案/执行'},
      {name:'Flash'},
      {name:'Android'},
      {name:'iOS'},
      {name:'Java'},
      {name:'illustrator'},
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .adept {
    padding: 0 85px;
    text-align: center;
  }
  .has-data{
    text-align: center;
  }
 
  .adept .has-data li{
    display: inline-block;
    line-height: 40px;
    border: 1px solid #0066ff;
    color: #0066ff;
    padding: 0 24px;
    font-size: 14px;
    margin: 10px;
    -webkit-border-radius:20px;
    -moz-border-radius:20px;
    border-radius: 20px;
  }
</style>
