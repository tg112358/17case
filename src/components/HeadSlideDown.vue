<template>
	
	<div class="head-slide-down" v-if="isShow" >
		<i class="arrow"></i>
	<!-- <svg class="icon arrow-icon" aria-hidden="true">
	        现代的辅助技术能够识别并朗读由 CSS 生成的内容和特定的 Unicode 字符。为了避免 屏幕识读设备抓取非故意的和可能产生混淆的输出内容（尤其是当图标纯粹作为装饰用途时），我们为这些图标设置了 aria-hidden="true" 属性。
	      <use xlink:href="#icon-less"></use>
	     </svg> -->

	<router-link class="slide-down-btn" to="/userprofile">个人主页</router-link>
	<a class="slide-down-link" >我的钱包</a>
	<a class="slide-down-link">设置</a>
	<a class="slide-down-link" @click="quit">退出登陆</a>
	</div>
</template>
 
<script>
export default{
	props: {
    isShow: {
      type: Boolean,
      default:false
    }
  },
  methods:{
  	quit(){
       this.$emit('user-quit')
  	}
  }
}
</script>
<style>

       .head-slide-down a{
      	font-size: 14px;
      	display: block;
      }
	 .head-slide-down{
	 	position: absolute;
	 	right: 49px;
	 	top: 55px;
         width: 110px;
         background:#fff;
         color: #fff;
         border:1px solid #333;
         box-shadow: 0 2px 3px 0 rgba(0,0,0,.08);
         webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.08);
         -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.08);
          -webkit-border-radius: 3px;
		  -moz-border-radius: 3px;
		  border-radius: 3px;
		  -webkit-background-clip: padding-box;
          background-clip: padding-box;
          z-index: 999;
	 }
         .arrow{
           position: relative;
           top: -22px;
		  right: 0;
		  color: red;
		  display: inline-block;
		  width: 0px;
		  height: 0px;
		  border-width: 8px;
		  border-style: solid;
		  border-color:transparent transparent #fff transparent;
		  } 
	 .slide-down-btn{
	 	margin:-20px 15px 10px;
	 	padding: 0px 8px;
	 	line-height: 26px;
	 	text-align: center;
	 	background-color: #0066FF;
	 	-webkit-border-radius: 13px;
	    -moz-border-radius: 13px;
	    border-radius: 13px;
	    -moz-background-clip: padding;
	    -webkit-background-clip: padding-box;
	    background-clip: padding-box;
	    /*border-box    背景被裁剪到边框盒。    

		padding-box    背景被裁剪到内边距框。    

		content-box    背景被裁剪到内容框。
		*/
	 }
     .slide-down-link{
     	    color: #333 !important; 
		    padding: 0 26px;
		    line-height: 34px;
     }
     .slide-down-link:hover{
     	background:rgba(20,20,20,0.1);
     }
</style>