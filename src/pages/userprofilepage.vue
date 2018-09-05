<template>
	<div class="userprofile">
		<div class="top_extension">
			<div class="head-img">
				<img :src="headshot">
			</div>
			<div class="head-btn">
				<div class="send-btn">雇佣专家</div>
				<div class="send-msg-btn">发送消息</div>
			</div>
		</div>
		<div class="content-container">
			<div class="profile">
				<baseinfoshow :is-show="isShowbaseInfoShow" @on-close="closeBaseinfoShow('isShowbaseInfoShow')" ></baseinfoshow>
				<baseinfo :is-show="isShowbaseinfo" @on-close="closeBaseinfo('isShowbaseinfo')"></baseinfo>
				<div class="appraise-info">
					<em>信誉度：</em>4.5分<br>
					<em>报价：</em>800元/天<br>
					<em>成交量：</em>15单<br>
					<div class="appraise removefloat">
							<div><em>准时率：</em>96%</div>
							<div><em>完成质量：</em>96%</div>
							<div><em>满意度：</em>96%</div>
					</div>
				</div>
			</div>
			<div class="profile-additional">
				 <h3>擅长技能</h3>
      			<span class="edit-btn" v-if="isShowadeptShow" @click="closeadeptShow('isShowadeptShow')"><i></i>编辑</span>
				<adeptshow :is-show="isShowadeptShow" ></adeptshow>
				<adept :is-show="isShowadept" @on-close="closeadept('isShowadept')"></adept>
			</div>
		</div>
	</div>
</template>

<script>
import baseinfo from '../components/baseinfo'
import baseinfoshow from '../components/BaseInfoShow'
import adeptshow from '../components/adeptShow'
import adept from '../components/adept'
import {mapState} from 'vuex'
	export default{
		components:{
			baseinfo,
			baseinfoshow,
			adeptshow,
			adept,
		},
		computed:{
  				...mapState({
    			   headshot:state => state.user.headshot,
 			   }),
  			},
		data(){
			return{
				isShowbaseinfo:false,
				isShowbaseInfoShow:true,
				isShowadept:false,
				isShowadeptShow:true,
			}
		},
		methods:{
			closeBaseinfo(attr){
				this[attr]=false;
				this.isShowbaseInfoShow=true;
			},
			closeBaseinfoShow(attr){
				this[attr]=false;
				this.isShowbaseinfo=true;
			},
			closeadept(attr){
				this[attr]=false;
				this.isShowadeptShow=true;
			},			
			closeadeptShow(attr){
				this[attr]=false;
				this.isShowadept=true;
			}			
		},
		mounted(){

		}
	}
</script>

<style scoped>
	.userprofile .top_extension{
		position: relative;
		width: 100%;
		height: 200px;
		min-width: 1200px;
		background: url(../img/background/banner.png);
		background-size: cover;
		text-align: center;
	}
	.top_extension .head-img{
		position: absolute;
		top: 90px;
		left: 50%;
		transform: translateX(-50%);
		width: 180px;
		height: 180px;
		border-radius: 50%;
		box-shadow: 0px 5px 15px;
		background-size: cover;
		z-index: 3;
	}
	.top_extension .head-img img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.top_extension .head-img:hover{
		cursor: pointer;
	}
	.userprofile .top_extension .head-btn{
		position: absolute;
		right: 30px;
		top: 182px;
		line-height: 40px;
	}
	.head-btn .send-btn,.head-btn .send-msg-btn{
		width: 140px;
		height: 40px;
		border-radius:8px; 
		border: 1px solid #0066ff;
		cursor: pointer;
	}
	.head-btn .send-btn{
		margin-bottom: 35px;
		background-color:#0066ff; 
		color: #fff;
	}
	.userprofile .content-container{
		margin:110px auto 0;
		max-width: 1090px;
	}
	.content-container .profile{
		width: 100%;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
	}
	.content-container .profile .appraise-info{
		padding: 10px 200px 0;
		line-height: 25px;
		font-size: 16px;
		text-align: center;
		box-sizing: border-box;
		background-clip: content-box;
	}
	.content-container .profile .appraise-info em{
		font-style: normal;
		font-weight: 550;
	}
	.appraise-info .appraise{
		margin: 20px 0 10px;
	}
	.appraise-info .appraise>div{
		float: left;
		width: 33.1%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		border-right:1px dotted #ccc;
	}
	.appraise-info .appraise>div:last-child{
		 border-right:0;
	}
	.profile-additional{
		position: relative;	
		margin-top: 36px;
		width: 100%;
		text-align: center;
		box-sizing: border-box;
	}
	 .profile-additional h3{
	 	margin-bottom: 20px;
    	font-size: 24px;
  }
  .profile-additional .edit-btn{
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 16px;
    color: #0066ff;
    cursor: pointer;
  }
</style>