<template>
	<div class="BaseInfoShow" v-if="isShow">
		<div class="title">
			<h2>{{formobjss.nickname}}</h2>
			<span class="edit-btn" @click="closeself"><i></i>编辑</span>
		</div>
		<p>{{formobj.desc}}</p>
		<div class="baseinfo">
			<span><i></i>{{formobjss.sex}}</span>
			<span>{{formobjss.school}}</span>
			<span>{{formobjss.city}}</span>
			<br>
			<span><i></i>{{formobjss.phone}}</span>
			<span><i></i>{{formobjss.email}}</span>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
	export default{	
  	computed:{
  				...mapState({
             	   id:state => state.user.id,
    			   logined:state => state.user.logined,
    			   username:state => state.user.username,
    			   headshot:state => state.user.headshot,
    			   phone:state => state.user.phone,
    			   formobjs:state => state.userinfo.userinfo
 			   	 }),

  				formobjss(){
  					this.isext('nickname')
  					this.isext('sex')
  					this.isext('city')
  					this.isext('phone')
  					this.isext('school')
  					this.isext('age')
  					this.isext('major')
  					this.isext('email')
  					this.isext('desc')
  					return this.formobj
  				}
  			},
    	props:{
    		isShow:{
    			type:Boolean,
    			default:false
    		}
    	},
		components:{

		},
		data(){
			return{
                     formobj:{
                     	id:'',
                     	entertype:'',
                     	nickname:'',
                     	sex:'完善性别',
                     	city:'完善城市',
                     	phone:'',
                     	school:'完善学校',
                     	age:'完善年龄',
                     	major:'完善专业',
                     	email:'完善E-mail',
                     	desc:'全面的介绍可以让客户更完整立体的了解你',
                     },
			}
		},

		methods:{
         closeself(){
         	this.$emit('on-close')
	         },
	        isext(attr){
				if(this.formobjs[attr]!=''){
	        		this.formobj[attr]=this.formobjs[attr]
	        	}
	        }
 			},
		created(){		
			  		    let id = sessionStorage.getItem('id')
			  		    let link = 'http://www.17case.cn:80/case/index.php'+'?'+'action=getPersonDetail'+'&'+'id='+id
                     	this.$http.get(link)
        				.then((res) => {
          				this.$store.commit("userBaseInfo",res.data)
          				},(error) => {
          				console.log(error)
        				})

		}

	}
</script>

<style scoped>
	.BaseInfoShow{
		padding: 0 200px;
		text-align: center;
	}
	.BaseInfoShow .title{
		position:relative;
		margin-bottom: 18px;
		width: 100%;
	}
	.BaseInfoShow .title h2{
		display: inline-block;	
		font-size: 28px;
		letter-spacing:2px;
		font-weight: 700;
	}
	.BaseInfoShow .title .edit-btn{
		position: absolute;
		top: 10px;
		right: 20px;
		font-size: 16px;
		color: #0066ff;
		cursor: pointer;
	}
	.BaseInfoShow p{
		font-size: 16px;
	}
	.BaseInfoShow .baseinfo{
		margin-top: 20px;
		color: #666;
		line-height: 25px;
	}

</style>