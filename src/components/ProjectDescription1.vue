<template>
	<div>
		<div class="project-panel">
					<div class="data-item">
						<span class="short-label">项目预算</span>
						<span class="short-val">3000元以下</span>
					</div>
					<div class="data-item">
						<span class="short-label">时间周期</span>
						<span class="short-val">小于1周</span>
					</div>
					<div>
						<span class="apply-btn">发送申请意向</span>
					</div>
					<div class="bottom-data removefloat">
                                <div>
                                    <div class="title">已推荐</div>
                                    <div class="txt">
                                        <strong>11</strong>
                                        人
                                    </div>
                                </div>

                                <div>
                                    <div class="title">已申请</div>
                                    <div class="txt">
                                        <strong>11</strong>
                                        人
                                    </div>
                                </div>
                                <div>
                                    <div class="title">已浏览</div>
                                    <div class="txt">
                                        <strong>11</strong>
                                        人
                                    </div>
                                </div>
					</div>

	   </div>

</div>
</template>
<script>

	export default{
		data(){
			return{
                  isShow:false
			}
		},

     methods: {
     	close(){
           this.isShow=false
     	},
     	open(){
     		this.isShow=true
     	}
     }
	}
</script>
<style scoped>
/* CSS 优先级法则：

A  选择器都有一个权值，权值越大越优先；

B  当权值相等时，后出现的样式表设置要优于先出现的样式表设置；

C  创作者的规则高于浏览者：即网页编写者设置的CSS 样式的优先权高于浏览器所设置的样式；

D  继承的CSS 样式不如后来指定的CSS 样式；

E  在同一组属性设置中标有“!important”规则的优先级最大；示例如下： */
	 .project-panel{
    	position: relative;
    	float: right;
    	width: 300px;
    	padding: 18px 0 0 ;
        background-color: #ed7266;
    }
    .project-panel .data-item,.project-panel .apply-btn{
    	margin: 0 30px;
    }
     .project-panel span{
    	display: block;
    }
    .project-panel .short-label{
    	margin-top: 14px;
    	font-size: 16px;
    	color: #fff;
    	opacity:.6;
    }
     .project-panel .short-val{
    	margin-top: 3px;
    	color: #fff;
    	font-size: 22px;
    	font-weight: 700;
    }
    .project-panel .apply-btn{
    	margin-top: 30px;
    	height: 46px;
    	line-height: 46px;
        -webkit-border-radius: 24px;
	    -moz-border-radius: 24px;
	    border-radius: 24px;
        background-clip: padding-box;
        -moz-background-clip: padding;
        -webkit-background-clip: padding-box;
        background-color:#fff;
        font-size: 16px;
        color: #ed7266;
        text-align: center;
        cursor: pointer;
    }

    .project-panel .bottom-data{
    	margin-top: 24px;
    	padding: 20px 0;
    	background-color: #e36a5f;
    }
     .project-panel .bottom-data>div{
    	width: 33.3%;
    	height: 38px;
    	float: left;
    	-webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    border-right:1px dotted #d9d9d9;
	    text-align: center;
	    color: #fff;
    }
    .project-panel .bottom-data>div:last-child{
        border-right:0;
    }
     .project-panel .bottom-data .title{
    	font-size: 12px;
    	margin:0;
    	transform: translateY(-4px);
    }
     .project-panel .bottom-data .txt{
    	font-size: 12px;
    }
    .project-panel .bottom-data .txt strong{
    	font-size: 18px;
    	font-weight: 400;
    }
</style>