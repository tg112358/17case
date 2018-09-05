<template>
	<div class="content-container">
		<div class="project-detail">
			<div class="project-name">
				<h2>电商平台后端增加功能修改功能</h2>
				<span>招募中</span>
			</div>
			<div class="category removefloat">
                <div>
                	<span class="category-list" >后端开发</span>
                	<span class="category-list" >PHP</span>
                	<span class="category-list" >JAVA</span>
                	<span class="category-list" >JAVA</span>
                </div>
            </div>
            <div class="project-info">
            	<div class="pro-des">
            		<h4>项目描述</h4>
            	</div>
            	<div class="project-txt">
							<pre>
https://cloud.tencent.com/document/product/454/12554
这里贴一个腾讯云的文档，目前遇到了一些技术问题，因前后端人员都没有相关经验，项目推进困难，我们的直播间需要有弹幕功能，所以集成的是腾讯云的带有IM的直播间，这里需要一个做过类似项目的大神，对这个模块指导一下，本人是本项目的开发，不会拉着你问东问西去解决其他问题，就这个直播的问题指导解决即可，报名请注明自己做过得类似项目的小程序名。

预算2000。					
							</pre>
            	</div>
            </div>
		</div>
	</div>
</template>

<script>

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
	.content-container{
		width: 920px;
    	min-height: 860px;
    	background: #fff;
    	box-sizing: border-box;
	}
	.project-detail{
		padding: 30px 30px;
		width: 860px;
		height: 800px;

		background-clip: content-box;
	}
	.project-name{
		position: relative;
		width: 100%;
		margin-top: 15px;
		text-align: center;
	}
	.project-name h2{
		display: inline-block;
		font-size: 28px;
		font-weight: 500;
	}
	.project-name span{
		position: absolute;
		top:3px;
		right: 30px;
		padding: 0px 15px;
		border: 1px solid #3F8BFF;
		border-radius: 13px;
		font-size: 16px;
		color: #3F8BFF;
		line-height: 27px;
	}
	.category{
		width: 100%;
	}
	.category div{
		min-width: 200px;
		margin: 20px auto;
		height: 28px;
		text-align: center;
		box-sizing: border-box;
		overflow: hidden;
	}
	.category span{
		display: inline-block;
		height: 15px;
		padding: 2px 8px;
		margin-right:15px;
		text-align: center;
		color: #82888a;
		border:1px solid rgba(255,255,255,.5);
		border-radius: 14px;
		background-clip: padding-box;
   		background-color: #f0f2f5;

	}
	.project-info{
		width: 100%;
	}
	.pro-des h4{
		font-size: 18px;
		color: #5E5E5E
	}
	.project-txt{
		margin-top: 20px;
		padding-top:20px; 
    	line-height: 24px;
    	font-size: 14px;
    	color: #555;
    	border-top:2px solid #CFCFCF;
    }
</style>