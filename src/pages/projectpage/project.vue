<template>
	<div>
		<div class="top_extension">
			<h2>这些项目都在等你来完成</h2>
		</div>
		<div class="content_container">
			<div class="project_content">
			    <tabs-list> </tabs-list>
				<div class="project_list">
					<router-view></router-view>
				</div>
				<div class="pager">
					<fenye></fenye>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../../components/Header'
import tabsList from '../../components/tabList'
/*import projectList from '../../components/projectList'*/
import fenye from '../../components/fenye'
	export default{
		components:{
			Header,
			tabsList,
/*			projectList,*/
			fenye,
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

<style>
	.top_extension{
		position: relative;
		width: 100%;
		height: 230px;
		min-width: 1200px;
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
		min-width: 1200px;
		margin:0 auto;
	}
	.project_content{
		width: 1200px;
		margin:0 auto;
	}
	.project_list{

	}
</style>