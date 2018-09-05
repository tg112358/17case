<template>
	<div class="project-frame">
		<div class="frame">
			<div class="head-img">
				<img src="">
				<h4>成都彼安迪广告设计有限公司</h4>
			</div>
			<div class="bas-info">
				<h3>基本信息</h3>
				<h4>项目类型：开发/后端开发</h4>
				<h4>发布时间：2018-05-25 14:59:31</h4>
				<h4>倾向让谁完成：没有倾向</h4>
				<h4>地址：中国四川成都高新南区天府大道北段1700号环球中心E2区E9楼1406</h4>
			</div>
		</div>
	</div>
</template>

<script scoped>

	export default{

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

<style scoped>	
	.project-frame{
		width: 300px;
    	height: 520px;
    	background:#0099FF;
		box-sizing: border-box;	
	}
	.frame{
		width: 230px;
		padding: 35px 35px 0;
		background-clip: content-box;
		color: #fff;
	}
	.head-img{
		padding: 10px 20px 0;
		width: 100%;
		box-sizing: border-box;
		text-align: center;
	}
	.bas-info{
		margin-top: 25px;
	}
	img{
		width: 190px;
		height: 190px;
	}
	h3{
		margin-bottom: 20px;
		font-size: 17px;
		font-weight: 600;
	}
	h4{
		font-size: 14px;
		margin: 10px 0 17px;
	}
</style>