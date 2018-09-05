<template>
  <div id="app">
        <footer class="foot">
         <div class="inner">
           <div class="brand fl">大学生垂直外包平台</div>
           <ul class="fl quick-link">
             <li>关于17CASE</li>
             <li>用户协议</li>
           </ul>
           <ul class="fl quick-link" >
             <li>新手指南</li>
             <li>意见反馈</li>
           </ul>
           <ul class="fl quick-link">
             <li>信任与保障</li>
             <li>专业之道</li>
           </ul>
           <ul class="fl quick-link">
             <li>帮助中心</li>
             <li>APP</li>
           </ul>
         </div>
         <div class="coptright">
           © 2018 17Case 京ICP备xxxxxxxx号-x 京公网安备xxxxxxxxxxx号
           <br>
           武昌首义学院首义互联工作室 版权所有17Case、互联工作室
            </div>
      </footer>   
  </div>
</template>

<script>
  export default{
          name:"app",
         components:{
         }
  }
</script>

<style>
 /*通常，当浮动子元素导致父元素塌陷的时候，只要给父元素加上overflow: hidden;来解决，但是对于IE不行，需要触发其hasLayout属性才可以。 
  zoom:1就是IE6 专用的 触发 haslayout 属性的。*/
  .foot .inner:before,.foot .inner:after {
   content:"";
   display:table;
   }
   .foot .inner:after { clear:both; }/* For IE 6/7 (trigger hasLayout) */
  .foot .inner { zoom:1; }
  .foot{
    min-width: 1200px;
    margin-top: 65px;
  }
  .inner{
    width: 1100px;
    margin:0 auto;
    padding-top:40px; 
    box-sizing: border-box; 
    border-top: 1px solid rgba(41,41,46,.1);
    zoom:1;
  }
  .brand{
    width: 166px;
    padding-top: 170px;
    margin-left: 30px;
    margin-right: 20px;
    background: url(../img/logo/blue/logo.png) no-repeat center top;
    background-size: 100px 160px;
    letter-spacing: 2px;
    text-align: center;
  }
  .inner:first-child ul{
    margin-left: 70px;
  }
  .inner>ul>li:hover{
    cursor: pointer;
    color: #00b38a;
  }
  .quick-link{
    margin-top: 50px;
    line-height: 30px;
    margin-right: 50px;
  }
  .coptright{
    font-size: 12px;
    padding:45px 0 30px; 
    text-align: center;
    line-height: 22px;
    opacity: 0.9;
  }
</style>