<template>
	<div>
		<div class="top_extension">
			<h2>发布项目</h2>
		</div>
		<div class="content_container">
			
		</div>
	</div>
</template>

<script>
	export default{
		components:{
		},
		data(){
			return{
			}
		},
		methods:{
            tabsact(idex){
                this.tabListAct=idex
            },
		},
		mounted(){

		}
	}
</script>

<style scoped>
	.top_extension{
		position: relative;
		width: 100%;
		height: 180px;
		background: url(../../img/background/banner.png);
		background-size: cover;
		text-align: center;

	}
	.top_extension h2{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 55px;
		color: #fff;
		z-index: 1;
	}
	.content_container{
		margin:0 auto;
		width: 100%;

		padding: 0 200px;
		height: 100px;
		background-color: red;

	}

</style>