<template>
	<div>
		<div class="header" >
			<div class="lgfree-head">
				<div class="fl f-logo">
					<a href="" class="header-logo"></a>
<!--           target="_blank"
 -->					<h2 class="hcase">17CASE</h2>
      				<i class="beta-icons">beta</i>
				</div>
				<ul class="fl nav">
					<router-link v-for="(item,index) in reheaders" :to="{path:item.path}"  tag="li" active-class="active">{{item.name}}</router-link>
				</ul>
				<div class="fr entry">
					<div class="fr login-bar"  @mouseenter="enter" @mouseleave="leave">
         				 <div class="head fl" v-if="logined" > <img :src="headshot" ></div>
           				 <div class="username fl"  v-if="logined"  >
           					 <p class="fl " >{{username}}</p>
           					 <i class="head-arrow fl"></i>
             				<HeadSlideDown :is-show="isShowHeadSlideDown" @user-quit="quit()" ></HeadSlideDown>
         				 </div>
         			 <ul  v-if="!logined" class="nav-list">
          				<li class="hand"  @click="logClick">登录</li>
           				<li class="nav-pile" >/</li>
          				<li class="hand" @click="regClick">注册</li>
        			 </ul>
        			</div>
               <router-link to="/project/creatProject" active-class="release-btn-active" class="fr release-btn">免费发布项目</router-link>
				</div>
			</div>
		</div>
		 <my-dialog :is-show="isShowLogDialog" @on-close="closeLogDialog">
        <log-form @has-log="onSuccessLog"></log-form>
   		</my-dialog>
   		<my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
        <reg @has-log="onSuccessReg" :is-show="isShowReg"></reg>
        <reg2 @has-log="onSuccessReg2" :is-show="isShowReg2"></reg2>
      </my-dialog>
	</div>
</template>
	<script scoped>
import Dialog from './Dialog'
import LogForm from './logForm'
import reg from './Reg'
import reg2 from './Reg2'
import HeadSlideDown from './HeadSlideDown'
import {mapState} from 'vuex'
		export default{
			components:{
				MyDialog:Dialog,
				LogForm,
				reg,
        reg2,
				HeadSlideDown,
			},
			data(){
				return{
					headers:[
				{
					name:'首页',
					path:'/index'
				},
				{
					name:'项目',
					path:'/project'
				},
				{
					name:'社区',
					path:'/xinshouzhinan'
				}
				],      
        isShowRegDialog:false,  
        isShowReg:true,
        isShowReg2:false,
        isShowHeadSlideDown:false,
        headerclass:'',
        type:'',
        user:{
          id:'',
          logined:'',
          phone:'',
          username:'',
          headshot:''
        },
          usera:{
          code:'',
          id:'',
          username:'',
          //headshot:''
        }
				}
			},
			computed:{
				 ...mapState({
             id:state => state.user.id,
    			   logined:state => state.user.logined,
    			   username:state => state.user.username,
    			   headshot:state => state.user.headshot,
             isShowLogDialog:state =>state.user.isShowLogDialog,
 			    }),

				reheaders(){
     			 if(!this.logined){
      			  return this.headers
    			  }else{
    			   this.headers.splice(2,0,{
             name:'我的工作',
              path:'/myjob'
            },{
    			    name:'消息',
    			  path:'/messages'
    			  })
    			      return this.headers
     			 }
   			 }
			},
  		 methods:{
   			    logClick () {
                this.$store.commit("upLogDialog",true)
    			   },
    			   regClick() {
      			   this.isShowRegDialog=true
    			   },
    			   quitClick(){
      			   this.username= ''
    			   },
             closeLogDialog(){
               this.$store.commit("upLogDialog",false)
             },
    			   closeDialog(attr){
      			   this[attr]=false
    			   },
             onSuccessReg(res){
                this.isShowReg = false
                this.isShowReg2 = true
                this.usera.id = res.data.id
                this.usera.code = 1
             },
            onSuccessReg2(res){
                this.closeDialog('isShowRegDialog')
                this.isShowReg = true
                this.isShowReg2 = false
                this.usera.username = res.username
                 //this.usera.photo = res.headshot
                let formData = JSON.stringify(this.usera);  
                /*JSON.parse(str)*/
                this.$http.post('http://www.17case.cn:80/case/index.php?action=register2',formData)
                .then((res) => {
                  if(res.data.code=1){this.onSuccessLog(res.data)}   
                }, (error) => {
                  console.log(error) 
                })
                  },
    			   onSuccessLog(res){
                    this.$store.commit("upLogDialog",false)
                    this.user.username = res.username
                    this.user.headshot = res.headshot
                    this.user.phone = res.mobile
                    this.user.id = res.id
                    this.user.logined = res.code
                    sessionStorage.setItem('logined',this.user.logined)
                    sessionStorage.setItem('username',this.user.username)
                    sessionStorage.setItem('id',this.user.id)    
                    sessionStorage.setItem('phone',this.user.phone)                
                    sessionStorage.setItem('headshot',this.user.headshot)
                    this.user.username = sessionStorage.getItem('username')
                    this.user.headshot = sessionStorage.getItem('headshot')
                    this.user.id = sessionStorage.getItem('id')   
                    this.user.phone = sessionStorage.getItem('phone')                   
                    this.user.logined = sessionStorage.getItem('logined')                
                    this.$store.commit("userInfo",this.user)
                },
             quit(){
                    sessionStorage.removeItem("id")
                    sessionStorage.removeItem("phone")
                    sessionStorage.removeItem("username")
                    sessionStorage.removeItem("logined")
                    sessionStorage.removeItem("headshot")
                    this.$store.commit("userquit")
                    this.isShowHeadSlideDown=false
                    this.user.username = ''
                    this.user.headshot = ''
                    this.user.logined = 0
                    this.headers.splice(2,2)
                    this.$router.push("/")
                  },
              enter(){
                    this.isShowHeadSlideDown=true

                 } ,
              leave(){
                    this.isShowHeadSlideDown=false
                 },
              headertest(type){
                    this.type=type;
                 }
               },
          mounted(){
                     if(this.username == ''){
                     this.$store.dispatch("refresh")
                     }
                    }
		}
	</script>
	<style>
	.header{
			width: 100%;
			min-width: 1200px;
			height: 68px;
			background-color: #0066ff;
			color: #fff;
		}
	.lgfree-head{
			max-width: 1400px;
			margin: 0 auto;
			height: 70px;
			padding: 12px 13px 0;
			box-sizing: border-box;
			zoom:1;
			background-clip: content-box;
		}
     a:hover{
      cursor: pointer;
    }


  .header-hyaline{
    display: block;
    position:absolute;
    top: 0px;
    left: 0px;
    z-index: 100;
    background-color:transparent;
    border-bottom: 0px;
  }

 .header-hyaline .lgfree-head li,.header-hyaline .lgfree-head a{
    color: #fff;
  }
  /*解决排版问题*/


 .header .header-logo{
    float: left;
    margin-left: 25px;
    width: 38px;
    height: 47px;
    background: url(../img/logo/white/logo2.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .header .f-logo .hcase{
  float: left;
  color: #fff;
  letter-spacing:.5px;
  font-size: 30px;
  font-family: "Proxy 9";
  font-weight: 800;
  line-height: 45px;
 }
 .header .beta-icons {
    float: left;
    margin:8px 6px;
    line-height: 16px;
    font-size: 12px;
    font-weight: 800;
    color:#333;
    padding: 0 4px;
    background-color:#fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
}
.header .nav{
  margin-left: 60px;
  line-height: 42px;
  }

.header .active{
    font-weight: 600;

    border-bottom: 2px solid #fff;
  }
  .nav>li{
    position: relative;
    float: left;
    margin-right:42px; 
    font-size: 18px;
  }
.nav>li:hover{
  cursor: pointer;
}
  .login-bar{
    margin-right: 40px;
    margin-top: 3px;
  }
  .login-bar li{
    line-height: 38px;
    font-size: 14px;
  }
   .nav-list li{
    float: left;
  }
   .hand:hover{
    cursor: pointer;
   }
  .nav-list{

    overflow: hidden;
  }
  .nav-pile {
  padding: 0 10px;
}

  .release-btn{
    margin:3px 27px;
    padding:0px 20px;
    height: 36px;
    box-sizing: border-box;
    border-radius: 21px;
    text-align: center;
    line-height: 36px;
    border: 1px solid #fff;
  }
  .release-btn-active{
    background: #333;
  }
 .release-btn:hover{
  background:#426ab3;
 }
 .login-bar .head{
  width: 34px;
  height: 34px;
 }
 .login-bar .head img{
  display: block;
  width: 34px;
  height: 34px;
  border:1px solid  #e9e9e9;
  border-radius: 50%;
  }
 .username{
  padding: 0 0 10px 10px;
  line-height: 36px;
  text-align: center;
  overflow: hidden;
 }
 .usra{
  color: #fff;
 }
 .login-bar .head-arrow{
  position: relative;
  right: 0;
  top: 17px;
  display: inline-block;
  width: 0px;
  height: 0px;
  border-width: 8px;
  border-style: solid;
  border-color: #fff transparent transparent; /* transparent透明色 上边框和下边框是#7d7d7d
                                          右边框和左边框是透明色 */
  margin-left: 5px;
 }
 .username p,.head-arrow:hover{
  cursor: pointer;
 }
	</style>
