<template>
	  <div class="top-banner">
       <ul class="banner-list"> 
         <li v-for="(list,index) in bannerList"><img :src="list.img"></li>
         </ul>
        <div class="layer"></div>  <!-- 黑色透明遮罩 -->

        <div class="blue-layer"> </div>
        <div class="tittle1">
        <h2>发布短期</h2>
        <h2>项目</h2>
        <h2>按需雇佣</h2>
        <h2>互联网专家</h2>
        </div>
        <div class="tittle2">1小时内对接专家，为你保障项目质量</div>
        <div class="btn-bar">
          <router-link class="join-btn" to="/userprofile" >入驻成为专家</router-link>
          <a class="creat-btn">免费发布项目</a>
        </div>




          <div class="join-count">
            <div class="count">2</div>
            <div class="unit">位同学已入驻</div>
          </div>
   </div>
</template>
<script>
import {mapState} from 'vuex'
	export default{   
    data(){
   return{
        mark:0,   //比对图片索引的变量 
       bannerList:[
        {img:require('../img/background/index.png')},
      ],
      count:''
    }
   },
   computed:{
           ...mapState({
             logined:state => state.logined,
          }),
         },
  methods: { 
 
  },  
  created () {  
    /*实例也会调用一些 生命周期钩子 ，这就给我们提供了执行自定义逻辑的机会。例如，created 这个钩子在实例被创建之后被调用：*/
    this.$http.get('api/count').
    then((res)=>{
      /*console.log(res.data)*/
      this.count=res.data.data
    },(error) => {
          console.log(error)
        })
  }  
 /*  this.$http.get('http://www.17case.cn:80/case/index.php?action=getpersoncount').
    then((res)=>{
        console.log(res)
        this.newprojectList=res.data
       this.allprojectList.push()
    },(error)=>{
        console.log(error)
    })*/
	}
</script>
<style >

 .top-banner{
   position: relative;
   width: 100%;
   height: 550px;
   min-width: 1200px;
   border-bottom: 3px solid #0066ff;
   z-index: 0;
 }
  .banner-list{
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
   .banner-list li img{
    width: 100%
   }
   .banner-list li:before,.banner-list li:after {
   content:"";
   display:table;
   }
   .banner-list li:after { clear:both; }/* For IE 6/7 (trigger hasLayout) */
  .banner-list li { zoom:1; }

  /*.layer{
    position: absolute;
    z-index: 0;
    left: 0px;
    top: 0px;
    width: 100%;
    height:600px;
    background-color:rgba(0,0,0,.3);
  }*/
  .blue-layer{
    position: absolute;
    z-index: 0;
    top: 70px;
    left: 50%;
    margin-left: -712px;
    width: 980px;
    height: 420px;
    background-color:rgba(0,71,255,.25);
  }
  .tittle1{
    position: absolute;
       height: 245px;
      top: 100px;
      left: 50%;
      margin-left: -552px;
      z-index: 10;
  }
   .tittle1 h2{
      font-weight: 900;
       font-size: 50px;
      color: #fff;
      letter-spacing: 4px;
      text-align: left;
      line-height: 55px;
   }
      .tittle2{
     width: 100%;
    position: absolute;
    top: 350px;
    margin-left: -305px;
    font-size: 30px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    }
     .btn-bar{
      width: 100%;
      position: absolute;
      top: 405px;
      margin-left: -370px;
      z-index: 1;
      text-align: center;
     }
     .btn-bar a{
         display: inline-block;
         width: 168px;
         height: 60px;
         border-radius: 6px;
         -moz-border-radius:6px;
         -webkit-border-radius:6px;
         background-clip: padding-box;
         -moz-background-clip:padding-box;
         -webkit-background-clip:padding-box;
         box-sizing: border-box;
          line-height: 58px;
         font-size: 18px;
         color: #fff;
         margin:0 10px;
     }
     .join-btn{
      background: #0066ff;
     }
     .creat-btn{
      border:2px solid #eaeaeb;
     }
      .join-count{
        position: absolute;
        top: 510px;
        right:50%;
        margin-right: -600px;
        padding: 30px 10px;
        min-width: 130px;
        background-color: #0066ff;
        color: #fff;
        text-align: center; 
      }
      .join-count .count{
        font-size: 36px;
      }
</style>