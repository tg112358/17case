<template>
  <div class="adept" v-if="isShow">
    <div class="result">
      <span  v-for="(item,index) in result">{{item.name}}<i @click="removepro(index)">X</i></span>
    </div>
    <div class="input-bar"></div>
    <div class="tech-content">
      <dl>
        <dt>开发</dt>
        <dd v-for="(item,index) in kaifa" @click="addpro(item)">{{item.name}}</dd>
      </dl>
      <dl>
        <dt>设计</dt>
        <dd v-for="(item,index) in sheji" @click="addpro(item)">{{item.name}}</dd>
      </dl>
      <dl>
        <dt>市场/运营</dt>
        <dd v-for="(item,index) in yunying" @click="addpro(item)">{{item.name}}</dd>
      </dl>
      <dl>
        <dt>产品</dt>
        <dd v-for="(item,index) in chanpin" @click="addpro(item)">{{item.name}}</dd>
      </dl>            
    </div>
    <div class="bc-btn" @click="onsubmit">保存</div>
    <em @click="onsubmit">取消</em>
  </div>
</template>

<script>
export default {
	/*父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。*/
  props: {
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      result:[],
      kaifa:[
              {name:'小程序开发',id:11},
              {name:'前端开发',id:12},
              {name:'微信开发',id:13},
              {name:'H5开发',id:14},
              {name:'后端开发',id:15},
              {name:'APP开发',id:16},
              {name:'WEB网站开发',id:17},
              {name:'项目经理',id:18},
              {name:'其他开发',id:19},
              ] ,
      sheji:[
              {name:'平面设计',id:21},
              {name:'UI设计',id:22},
              {name:'交互设计',id:23},
              {name:'插画设计',id:24},
              {name:'动画设计',id:25},
              {name:'其他设计',id:26},
              ],
      yunying:[
              {name:'运营',id:31},
              {name:'市场',id:32},
              {name:'编辑',id:33},
              {name:'其他市场/运营',id:34},
              ],
      chanpin:[
              {name:'产品经理',id:41},
              {name:'产品咨询',id:42},
              {name:'其他产品',id:43},             
              ]              
          }
        },
  methods: {
     onsubmit(){
        this.$emit('on-close')
      },
     closeMyself () {
     //this.isShow=false  导致dialog只能弹出一次
     this.$emit('on-close')
      },
    removepro(index){       
     this.result.splice(index, 1);
      },
    addpro(tech){
       this.result.push({name:tech.name,id:tech.id});
      },
    }
}
</script>

<style scoped>
  .adept{
    padding: 0px 250px 0;
    width: 100%;
    box-sizing: border-box;
  }
   .adept .result{
    margin-bottom: 20px;
    width: 100%;
    color: #fff;
  }
   .adept .result i{
    margin-left:4px; 
    color: #ccc;
    cursor: pointer;
  }
  .adept .result span{
    display: inline-block;
    margin:0 12px 10px 0;
    padding: 5px 7px;
    background: #0066ff;
    font-size: 16px;
    border: 1px solid #0066ff;
    border-radius: 15px;
  }
  .adept .tech-content{
    padding: 0 20px 22px;
    text-align: left;
  }
  .adept .tech-content dl:before,.adept .tech-content dl:after{
    content: "";
    display: table;
  }
  .adept .tech-content dl:after{
    clear: both;
  }
  .adept .tech-content dl {
    margin-bottom: 15px;
    zoom:1;
  }
 .adept .tech-content dt{
  margin-bottom: 5px;
  font-size:16px;
  color: #0066ff;
 } 
  .adept .tech-content dl dd{
    display: inline-block;
    float: left;
    margin: 0px 15px 8px;
    padding: 2px 6px;
    border: 1px solid #e4e4e4;
    cursor: pointer;
  }
    .bc-btn {
    margin:11px auto 0;
    padding: 10px 0px;
    width: 180px;
    background: #0066FF;
    border-radius: 28px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  .bc-btn+em{
    display: block;
    margin:15px auto 0;
    width: 70px;
    font-style: normal;
    color: #0066FF;
    border-bottom: 1px solid #0066FF;
     cursor: pointer;
  }
</style>
