<template>
	<div>
		<div class="operate-notes">
			<div class="sub-title">
				<a href="" class="a-list">项目列表</a>
				<i><</i>
				<a href="" class="a-detail">项目详情</a>
			</div>
		</div>
		<div class="detail-project removefloat">
			<div class="project-info">
				<description></description>
			</div>
			<div class="project-desc">
				<description2></description2>
			</div>
			<div class="project-budg">
				<description1></description1>
			</div>
		</div>
	</div>
</template>

<script>
import description from '../../components/ProjectDescription'
import description1 from '../../components/ProjectDescription1'
import description2 from '../../components/ProjectDescription2'
	export default{
		components:{
			description,
			description1,
			description2
		},
		data(){
			return{

			}
		},
		methods:{

		},
		mounted(){

		}
	}
</script>

<style>	
	.a-list{
		color: #0066FF;
		font-size: 20px;
	}
	.a-detail{
		font-size: 17px;
	}
	.sub-title i{
		font-size: 18px;
		color: #fff;
	}
	.operate-notes{
		padding: 110px 0 110px;
		width: 100%;
		background-image:url(../../img/background/banner.png); 
		background-size: cover;
	}
	.sub-title{
		width: 1200px;
		margin:0 auto;
	}
    .detail-project{
    	width: 1250px;
    	margin:-30px auto 0;
    }
    .project-info{
    	float: left;
    }
    .project-desc{
    	float: right;
    }
    .project-budg{
    	float: left;
    	margin-top: 10px;
    }
</style>