<template>
  <div>
  	       		<div class="form-selected form-input" :class="{'active':isact}" @click="isAct">
       			<div class="result removefloat">
       				<span v-for="(item,index) in professions">
       					{{item.name}}
       					<i class="icon-close" @click="removepro(index)">X</i>
       				</span>
       			</div>
       			<i class="arrow"></i>
       		</div>
       		<div class="slide-down slide-select multiple-select " :class="{'dn':!isact}">
       			<ul class="root-category" >
       				<li v-for="(item,index) in RootCategory" @click="profes(index)">{{item.name}}</li>
       			</ul>
       			<ul v-if="professiontype==0" class="second-category">
       				<li v-for="(item,index) in kaifa" @click="addpro(item.name)">{{item.name}}</li>
       			</ul>
       			<ul v-if="professiontype==1" class="second-category">
       				<li v-for="(item,index) in sheji" @click="addpro(item.name)">{{item.name}}</li>
       			</ul>
       			<ul v-if="professiontype==2" class="second-category">
       				<li v-for="(item,index) in yunying" @click="addpro(item.name)">{{item.name}}</li>
       			</ul>
       			<ul v-if="professiontype==3" class="second-category">
                                   <li v-for="(item,index) in chanpin" @click="addpro(item.name)">{{item.name}}</li>
       			</ul>
       		</div>
  </div>
</template>

<script>

	export default{
		components:{

		},
		data(){
			return{
					entertypes:[
                            {name:'自由职业'},
                            {name:'兼职'},
                            {name:'团队/工作室'},
                            ],
                     professions:[
                          {name:'前端开发'},
                          {name:'后端开发'},
                          {name:'H5开发'},
                          {name:'微信开发'},
                          {name:'市场'},
                          ],
                     RootCategory:[
                     {name:'开发'},
                     {name:'设计'},
                     {name:'市场/运营'},
                     {name:'产品'},
                     ] ,
                     kaifa:[
                     {name:'小程序开发'},
                     {name:'前端开发'},
                     {name:'微信开发'},
                     {name:'H5开发'},
                     {name:'后端开发'},
                     {name:'APP开发'},
                     {name:'WEB网站开发'},
                     {name:'项目经理'},
                     {name:'其他开发'},
                     ] ,
                     sheji:[
                     {name:'平面设计'},
                     {name:'UI设计'},
                     {name:'交互设计'},
                     {name:'插画设计'},
                     {name:'动画设计'},
                     {name:'其他设计'},
                     ],
                     yunying:[
                      {name:'运营'},
                     {name:'市场'},
                     {name:'编辑'},
                     {name:'其他市场/运营'},
                     ],
                     chanpin:[
                      {name:'产品经理'},
                     {name:'产品咨询'},
                     {name:'其他产品'},                         
                     ]
             
			}
		},
		methods:{
                     enter(index){
                            this.entertype=index;

                     },
                     profes(index){
                            this.professiontype=index;
                     },
                     removepro(index){
                            this.professions.splice(index, 1);
                     },
                     addpro(proname){
                            this.professions.push({name:proname});
                     },
                     isAct(){
                            this.isact=!this.isact;
                     }
		},
		mounted(){

		}
	}
</script>

<style scoped>
       .active{
              border-color: #3dca99 !important;
       }
       .dn{
              display: none;
       }
        .icon-close:hover{
              cursor: pointer;
       }
		.form-selected{
              position: relative;
              cursor: pointer;
              padding-right: 36px !important;
              padding-bottom: 4px !important;
       }
       .form-selected .result span{
              display: block;
              float: left;
              height: 26px;
              padding: 0 10px;
              -webkit-border-radius:13px ;
              -moz-border-radius:13px ;
              border-radius:13px ;
              -webkit-background-clip:padding-box;
              -moz-background-clip:padding;
              background-clip:padding-box;
              background-color:#f0f2f5;
              margin-right: 8px;
              margin-bottom: 6px;
              cursor:text;
       }
       .form-selected .arrow{
              position: absolute;
              right: 16px;
              top: 22px;
              display: block;
              width: 0;
              height: 0;
              border-width: 6px;
              border-style: solid;
              border-color: #7d7d7d transparent transparent
       }
	.form-item+.form-item{
		margin-top: 12px;
	}
	.form-input{
		-webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 100%;
	    min-height: 46px;
	    padding: 10px 16px;
	    line-height: 26px;
	    border: 1px solid #dce0e0;
	    -webkit-border-radius: 3px;
	    -moz-border-radius: 3px;
	    border-radius: 3px;
	    font-size: 14px;
	}
       .profile-base .multiple-select{
              height: 156px;
       }
       .profile-base .multiple-select ul{
             height: 100%;
             float: left
       }
       .slide-select{
              font-size: 14px;
       }
       .slide-down{
              position: absolute;
              margin-top: 2px;
              z-index: 2;
              width: 100%;
              -webkit-box-sizing:border-box;
              -moz-box-sizing:border-box;
              box-sizing:border-box;
              background-color: #fff;
              cursor: pointer;
              border: 1px solid #dce0e0;
             -webkit-border-radius: 3px;
             -moz-border-radius: 3px;
             border-radius: 3px;
             -moz-background-clip: padding;
             -webkit-background-clip: padding-box;
             background-clip: padding-box;
             box-shadow: 0 2px 3px 0 rgba(0,0,0,.08);
       }
       .profile-base .root-category{
            width: 33%;
           -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
           box-sizing: border-box;
           border-right: 1px solid #dce0e0;
       }
       .slide-select li{
              line-height: 38px;
              padding: 0 16px;
       }
       .profile-base .second-category{
              width: 67%;
              overflow-y:scroll; 
       }
</style>