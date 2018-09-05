<template>
	<div class="userprofile"  v-if="isShow">
		<div class="form-item removefloat">
			<h3 class="fl">基本信息</h3>
		    <ul class="join-category fl removefloat">
       			<li v-for="(item,index) in entertypes" @click="enter(index)" :class="{'active':index==formobj.entertype}">
       			<i></i>
       			{{item.name}}
       			</li>
       		</ul>
		</div>
		<div class="form-box removefloat">
			<div class="form-input fl">
				昵称<input type="text" v-model="formobj.nickname">
			</div>
			<div class="form-input fl">
				城市<input type="text" v-model="formobj.city">
			</div>
			<div class="form-input fl">
				性别<input type="text" v-model="formobj.sex">
			</div>
			<div class="form-input fl">
				年龄<input type="text" v-model="formobj.age">
			</div>
			<div class="form-input fl">
				学校<input type="text" v-model="formobj.school">
			</div>
			<div class="form-input fl">
				专业<input type="text" v-model="formobj.major">
			</div>
			<div class="form-input fl">
				电话<input type="text" v-model="formobj.phone" readonly="readonly">
			</div>
			<div class="form-input fl">
				邮箱<input type="text" v-model="formobj.email">
			</div>
		</div>
		<div class="about-me removefloat">
			<h4 >关于我</h4>
			<textarea class="desc-me" v-model="formobj.desc" placeholder="请用一句话描述自己"></textarea>
		</div>
		<div class="bc-btn" @click="onsubmit">保存</div>
		<em @click="onsubmit">取消</em>
	</div>
</template>

<script>
import {mapState} from 'vuex'
	export default{
		props: {
    		isShow: {
      		type: Boolean,
      		default: false
    			}
  			},	
  	computed:{
  				...mapState({
             	   formobjs:state => state.userinfo.userinfo
 			   	 }),

  			},
		data(){
			return{
                     entertypes:[
                            {name:'学生'},
                            {name:'团队/工作室'},
                        ],
                     formobj:{
                     	id:'',
                     	entertype:'0',
                     	nickname:'',
                     	sex:'',
                     	city:'',
                     	phone:'',
                     	school:'',
                     	age:'',
                     	major:'',
                     	email:'',
                     	desc:'',
                     },
			}
		},
		methods:{
                     enter(index){
                            this.formobj.entertype=index;
                     },
                     onsubmit(){
                     	this.formobj.id = sessionStorage.getItem('id')
                     	let formData = JSON.stringify(this.formobj); 
                     	this.$http.post('http://www.17case.cn:80/case/index.php?action=editCollege',formData)
        				.then((res) => {
          				this.formobj = res.data
          				this.$store.commit("userBaseInfo",this.formobj)
          				},(error) => {
          				console.log(error)
        				})
 
        				this.$emit('on-close')

                     }
		},
		mounted(){
				let id = sessionStorage.getItem('id')
			  	let link = 'http://www.17case.cn:80/case/index.php'+'?'+'action=getPersonDetail'+'&'+'id='+id
                this.$http.get(link)
        		.then((res) => {
        		this.formobj = res.data
          		},(error) => {
          		console.log(error)
        		})
			
				this.formobj.phone = sessionStorage.getItem('phone')  
				this.formobj.id = sessionStorage.getItem('id') 
		}
	}
</script>

<style scoped>
	.userprofile{
		width: 100%;
		margin-bottom:40px; 
		text-align: center;
		font-size:18px;
	}
	.form-item{
		width: 100%;
		margin-top:20px;
	}
	.form-item h3{
		font-size: 24px;
		font-weight: 700;
	}
	.form-item .join-category{
		margin-top: 6px;
		margin-left: 300px;
	}
	.form-item .join-category li{
		margin-right: 70px;
		float:left;
		cursor: pointer;
	}
	.form-item .join-category .active i{
		border: 5px solid #0066ff;
	}
	.form-item .join-category li i{
		display: inline-block;
		margin-right: 5px;
	    margin-top: -2px;
	    width: 18px;
	    height: 18px;
	    -webkit-border-radius: 50%;
	    -moz-border-radius: 50%;
	    border-radius: 50%;
	    -moz-background-clip: padding;
	    -webkit-background-clip: padding-box;
	    background-clip: padding-box;
	    vertical-align: middle;
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    border: 1px solid #dce0e0;
	}
	.form-box{
		position: relative;
		width: 100%;
		margin-top: 30px;
		padding: 0 100px;
		box-sizing: border-box;
	}
	.form-input{
		margin-top: 40px;
	}
	.form-input:nth-child(2n+1){
		margin-right: 180px;
	}
	input[type="text"]{
		width: 290px;
		height: 40px;
		margin-left: 20px;
		text-overflow: ellipsis;
	}

	.bc-btn {
		margin:90px auto 0;
		padding: 10px 0px;
		width: 180px;
		background: #0066FF;
		border-radius: 28px;
		text-align: center;
		color: #fff;
	}
	.bc-btn+em{
		display: block;
		margin:15px auto 0;
		width: 70px;
		font-style: normal;
		color: #0066FF;
		border-bottom: 1px solid #0066FF;
	}
	.bc-btn:hover,.bc-btn+em:hover{
		cursor: pointer;
	}
	.userprofile .about-me{
		margin: 40px auto 0;
	}
	.userprofile .about-me h4{
		font-size: 25px;
		font-weight: 500;
		margin-bottom: 30px;
	}
	.about-me .desc-me{
		width: 790px;
		height: 200px;
	}
	</style>