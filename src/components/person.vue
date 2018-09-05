<template>
  <div class="exposure-person">
    <h3 class="free-h3">他们都是校园里不同领域的大神</h3>
    <div class="free-h3-tips">每位大神都经过严格审核，每5位申请只有1位晋级大神</div>
          <h4 class="free-h4">交付型大神</h4>
    <div class="person-list-efficiency">
      <div class="list-efficiency removefloat">

        <ul>
          <li  v-for="(list,index) in personLists"  @mouseenter="enter(index)" @mouseleave="leave">
            <a>
             <!--  <img class="head-pic" :src="list.photo"> -->
                  <img class="head-pic" :src="list.photo">
                           <!--  <img class="head-pic" src="http://a08669938d723f565e97.b0.upaiyun.com/apicloud/76585fbbd2b62d5aaa778f5c22ffe82b.jpg"> -->
              <div class="bg"> </div>
            <transition name="left"> 
              <div class="category "  v-if="categorya==index"  >
                 <ul >
                    <li class="category-list" v-for="(calist,index) in list.decList">{{calist.cate}}</li>
                  </ul>
              </div>
             </transition>
             <div class="selfpannel">
                 <div class="title">{{list.title}}
                 <span class="self-title">/{{list.slftitle}}</span>
                 </div>
                 <!-- <p class="profile">{{list.profile}}</p> -->
                 <p class="profile">提供美观、易用的高品质视觉设计。</p>
             </div>
            </a>
          </li>
        </ul>

       <div class="efficiency-vertical">
        <a>
          <img class="head-pic" :src="vertical.img">
              
               <div class="bg2"> </div>
              <div class="category">
                <ul class="removefloat">
                   <li class="category-list" v-for="(list,index) in vertical.categoryList">{{list.cate}}</li>
                 </ul>
              </div>
             <div class="selfpannel">
                 <div class="title">{{vertical.title}}
                 <span class="self-title">/{{vertical.slftitle}}</span>
                 </div>
                 <p class="profile">{{vertical.profile}}</p>
             </div>
        </a>
      </div>

      </div>
    </div>


  </div>
</template>
<script>
  import {iconfonts} from '@/font/iconfont.js'
  export default{
       data(){
        return{
      categorya:'',
       personList:[],
       personteamList:[],
       vertical:
        {
          img:require('../image/1.png'),
             title:'OWE Design',
             slftitle:'5星视觉设计师',
             profile:'提供美观、易用的高品质视觉设计。',
             categoryList:[
                 {cate:'回复迅速'},
                 {cate:'态度极好'},
                 {cate:'极其专业'}
             ]
        },
       }
       },
       computed:{
        personLists(){
            return this.personList.slice(0,7)
        },
        personteamLists(){
            return this.personteamList.slice(0,5)
        }
       },
       methods:{
               enter(idex){
                    this.categorya=idex

                 } ,
                leave(indx){
                    this.categorya=-1
                 },
                 test(idex){
                  alert(idex)
                 }
               },
    created () {
    this.$http.get('http://www.17case.cn:80/case/index.php?action=getPersonSimple').
    then((res)=>{
        console.log(res)
        this.personList=res.data
    },(error)=>{
        console.log(error)
    })

  },
  }
</script>
<style>
 .left-enter,.left-leave-to{
  transform: translateX(88px);
 }
 .left-enter-to,.left-leave{
  transform: translateX(0px);
 }
 .left-enter-active,.left-leave-active {
  transition: all 1s ease;
}


  .icon-appreciate {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       padding: 0 12px;
       /* fill: currentColor; *//*currentColor的值和当前color属性的值是一样。*/
       overflow: hidden;
    }
     img{
      border:0;
      vertical-align: top;
      display: inline-block;
     }
     .exposure-person{
      min-width: 1200px;
      margin:0 auto;
     }
   .free-h3{
    font-size: 30px;
    font-weight: 700;
    color: #333;
    margin: 0;
    padding-top: 60px;
    text-align: center;
   }
   .free-h3-tips{
    font-size: 16px;
    text-align: center;
   }
   
   .free-h4{
    color: #333;
    font-size: 22px;
    text-align: center;
    margin: 0;
    padding: 48px 0 26px;
   }

   .list-efficiency{
    padding: 20px 20px 0; 
    width: 1220px;
    background-color: #fff;
    margin:0 auto;
   }

   .exposure-person a:hover{
    box-shadow: 4px 4px 25px #224b8f;
   }

     .exposure-person a:hover .title{
         color: #224b8f;
   }

     .list-efficiency>ul{

             width: 915px;
             float: left;
             zoom:1;
   }
   .list-efficiency>ul>li:first-child{
      margin-left: 0;
     }
      .list-efficiency>ul>li:nth-child(3n+1){
      margin-left: 0;
     }
  
   .list-efficiency>ul>li{
        position: relative;
        float: left;
        overflow: hidden;
        margin-left: 20px;
        margin-bottom: 20px;
        border: none;        
   }

   .list-efficiency>ul>li>a{
        position: relative;
            width: 285px;
            background-color: #fff;
            border-radius: 6px;
            color: #333;
            display: block;
            z-index: 1;

   }
   .head-pic{
    width: 285px;
    height: 225px;
   }

    .list-efficiency  .bg{
        width: 100%;
        height: 225px;
        background:  rgba(0,102,255,.1);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
     }

     .list-efficiency .category{
      position: absolute;
      top: 30px;
      right: 0px;
      width: 88px;
      z-index: 2;
     }
     .efficiency-vertical .category{
      top:370px;
      width: 100%;
      box-sizing: border-box;
     }
     .efficiency-vertical .category ul{
      padding: 0 10px;
     }
      .efficiency-vertical .category ul li{
        float: left;
      }
     .category-list{
          width: 64px;
          margin-bottom: 5px;
          padding: 2px 11px;
          border:1px solid rgba(255,255,255,.5);
          text-align: center;
          color: #fff;
          opacity: .8;
          border-radius: 14px;
          background-color: rgba(0,0,0,.3)
     }

     .selfpannel{
      position: absolute;
      width: 100%;
      height: 64px;
      bottom: 0px;
      background-color: rgba(255,255,255,.4);
     }
    .selfpannel .title{
       margin-top: 10px;
        font-size: 18px;
        font-weight: 700;
        
     }
     .selfpannel .self-title{
      font-weight: 400;
      font-size: 16px;
     }
     .selfpannel .profile{
      font-size: 14px;
      line-height: 22px;
      color: #555;
     }
     .title,.profile{
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;/*  显示省略符号来代表被修剪的文本。*/
        white-space: nowrap;  /*规定段落中的文本不进行换行：*/
        word-wrap: normal;    /*只在允许的断字点换行（浏览器保持默认处理）*/ 
     }

     .efficiency-vertical{
        float: right;
        margin-right: 5px;
        overflow: hidden;
     }
     .efficiency-vertical a{
      position: relative;
      width: 285px;
      background-color: #fff;
        border-radius: 6px;
        color: #333;
        display: block;
        z-index: 1;
     }
     .efficiency-vertical .head-pic{
      height: 470px;
     }
      .efficiency-vertical .bg2{
        width: 100%;
        height: 100%;
        background: rgba(0,102,255,.1);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
     }
  
</style>