<template>
	<div>
		<div class="project_list">
        <ul class="removefloat">
            <router-link v-for="item in allprojectLists" to="/project/projectdetail"  tag="li">
                        <a>
                           <h3>{{item.tittle}}</h3>

                              <div class="price">
                                <span class="range">{{item.range}}</span>
                              </div>

                              <div class="catogory-list">
                                <span class="catogory-tag" v-for="list in item.catogoryTagList">{{list.category}}</span>
                              </div>
                            <div class="status">
                              <span class="recruiting">{{item.recruiting}}</span>
                             </div> 
                              <div class="bottom-data removefloat">
                                <div>
                                    <div class="title">已推荐</div>
                                    <div class="txt">
                                        <strong>{{item.recommend}}</strong>
                                        人
                                    </div>
                                </div>

                                <div>
                                    <div class="title">已申请</div>
                                    <div class="txt">
                                        <strong>{{item.apply}}</strong>
                                        人
                                    </div>
                                </div>
                                <div>
                                    <div class="title">已浏览</div>
                                    <div class="txt">
                                        <strong>{{item.browse}}</strong>
                                        人
                                    </div>
                                </div>
                              </div>

                               <div class="time">
                                <i></i>
                                <div class="txt">{{item.createdAt}}</div>
                              </div>
                        </a>
            </router-link>
        </ul>
      </div>
	</div>
</template>

<script>
	export default{
		data(){
          return{
                allprojectList:[],
                thisPage:1,
                 }
         },
         methods:{
            fetchDate(){
                   var types = this.$route.params.name
                    if(!types){types='全部'}
                    var link = 'http://www.17case.cn:80/case/index.php'+'?'+'action=getItemByType'+'&'+'type='+types
                    this.$http.get(link).
                    then((res)=>{
                        console.log(res)
                        this.allprojectList=res.data
                        console.log(this.allprojectList)
                    /*this.allprojectList.push()*/
                    },(error)=>{
                     console.log(error)
                    }) 
               }  ,
         },
         computed:{
            allprojectLists(){
                if(this.allprojectList.code==-1){
                    /*return this.allprojectList*/
                }else{
                    for(let k=0;k<2;k++){
                        for(let j=0;j<this.allprojectList.length;j++){
                            for(let i=0;i<this.allprojectList[j].catogoryTagList.length;i++){
                             if(this.allprojectList[j].catogoryTagList[i].category==null){
                                    this.allprojectList[j].catogoryTagList.splice(i,1)
                                }
                            }
                        }
                    }
                return this.allprojectList.slice(this.thisPage*9-9,this.thisPage*9)
                }
            }
         },
         watch:{
            /* $route(to,from){
              console.log(to.path);
                }*/
                '$route':'fetchDate'
              },
        created(){
            this.fetchDate()
         },
        destroyed(){
            this.allprojectList = ''
        }
	}
</script>

<style>
	 .project_list ul {
        margin-top: 14px;
        text-align: center;
    }
    .project_list ul>li:nth-child(3n+1){
        margin-left: 0;
    }
    .project_list ul>li{
        position: relative;
        width: 318px;
        height: 350px;
        padding:38px 30px 0;
        float: left;
        border: 1px solid #ccc;
        margin: 30px 0 0 30px;
        cursor: pointer;
    }
    .project_list ul>li:hover{
        border: 1px solid #333;
    }
    .project_list .status .recruiting{
          background-color: #337ab7;
    }
     .project_list .status{
        margin-top: 30px;
     }
    .project_list .status span{
        padding:5px 10px;
        color: #fff;
        font-size: 14px;
        border-radius: 15px;
        -moz-border-radius:15px;
        -webkit-border-radius:15px;
        background-clip: padding-box;
        -moz-background-clip: padding-box;
        -webkit-background-clip: padding-box;
    }
    .project_list h3{

        color: #333;
        font-size: 22px;
        font-weight: 700;
        width: 100%;
        overflow: hidden;       /* 超出隐藏 */
        text-overflow: ellipsis; /* 超出用省略号代替 */
        white-space: nowrap;     /* 强制文本在一行内显示 */
        word-wrap: normal;      /* 只在允许的断字点换行 */
    }
    .project_list .price{
        margin-top: 25px;
    }
    .project_list .price .range{
        font-size: 16px;
        color: #ff734b;
    }
    .project_list .catogory-list{
        margin-top: 35px;
        height: 28px;
        overflow: hidden;
    }
    .project_list .catogory-tag{
        display: inline-block;
        height: 18px;
         margin:3px 5px;
        padding: 2px 8px;
        -webkit-border-radius:12px;
        -moz-border-radius:12px;
        border-radius: 12px;
        -webkit-background-clip:padding-box;
        -moz-background-clip:padding-box;
        background-clip: padding-box;
        background-color: #f0f2f5;
        font-size: 12px;
        color: #82888a;
    }
    .project_list .bottom-data{
        margin-top: 40px;
        font-size: 14px;
    }
   .project_list .bottom-data>div{
        width: 33.3%;
        height: 38px;
        float: left;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border-right: 1px dotted #d9d9d9;
        text-align: center;
    }
    .project_list .bottom-data>div:last-child{
        border-right: 0;
    }
    .project_list .bottom-data .title{
       transform: translateY(-4px);
       color: #999;
    }
    .project_list .bottom-data .txt{
        font-size: 12px;
        color: #666;
    }
    .project_list .bottom-data .txt strong{
        font-size: 18px;
        font-weight: 400;
    }
     .project_list  .time{
        margin-top: 30px;
        text-align: center;
        color:#999;
    }
    .project_list  .time .txt{
        display: inline-block;
        vertical-align: middle;
    }
</style>