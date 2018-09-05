<template>
    <div>   
            <div class="project">
            <div class="publish-project">
            <div class="sub-title">
                  <h4 class="free-h4">最新项目</h4>
                  <a class="more" >更多></a>
            </div>
            <div class="project-list">
                  <ul class="removefloat">
                        <li v-for="item in this.newprojectLists">
                              <a>
                                  <div class="project-type">
                                  	   <div class="type-bg"></div>
                                       <img class="type-pic" src="../img/indexpic/fourtypes/1.png">
                                       <div class="pro-type">
                                       	 {{item.projectType}}
                                         <i class="new"> new</i>
                                       </div>
                                  </div>
                                  <div class="project-main">
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
                                  </div>
                              </a>
                        </li>
                        
                  </ul>
            </div>
            </div>
      </div>
      </div>
</template>
<script>
      export default{
     data(){
      return{
      newprojectList:[],
      }
      },
    methods:{
   
    },
         computed:{
            newprojectLists(){
                for(let k=0;k<2;k++){
                  for(let j=0;j<this.newprojectList.length;j++){
                    for(let i=0;i<this.newprojectList[j].catogoryTagList.length;i++){
                        if(this.newprojectList[j].catogoryTagList[i].category==null){
                            this.newprojectList[j].catogoryTagList.splice(i,1)
                        }
                    }
                  }
                }
                return this.newprojectList.slice(0,6)
            }
         },
       created () {
     this.$http.get('http://www.17case.cn:80/case/index.php?action=getItemSimple').
    then((res)=>{
      console.log(res)
        this.newprojectList=res.data
        console.log(this.allprojectList)
    },(error)=>{
        console.log(error)
    })
/*get(url, [data], [success], [options])
post(url, [data], [success], [options])
put(url, [data], [success], [options])
patch(url, [data], [success], [options])
delete(url, [data], [success], [options])
jsonp(url, [data], [success], [options])*/
console.log(this.newprojectList)
      }
      }

</script>
<style>
      .project{
            width: 100%;
            background-color: #fff;
      }
      .publish-project{
            width: 1200px;
            margin:0 auto;
      }
      .sub-title{
            position: relative;
      }
      .more{
            position: absolute;
            right: 0;
            top: 48px;
            line-height: 33px;
            color: #666;
            font-size: 16px;
      }

      .project-list ul{
            zoom:1;
            text-align: center;
      }
      .project-list ul>li{
            position: relative;
            width: 380px;
            float: left;
            margin:0 0 30px 30px;
            cursor:pointer;
      }
      .project-list ul>li:nth-child(3n+1){
            margin-left: 0;
      }
      .project-list ul>li:first-child{
            margin-left: 0;
      }
      .project-type {
            position: relative;
            height: 118px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            font-size: 18px;
            background-color: #333;
            color: #fff;
            background-repeat :no-repeat;
            background-size: cover; 
            font-weight: 700;
      }
      .type-bg{
      	width: 100%;
      	height: 100%;
      	position: absolute;
      	background-color: rgba(0,102,255,.4);
      }
      .type-pic{
      	width: 100%;
      	height: 100%;
      }
      .pro-type{
      	position: absolute;
      	top: 50%;
      	left: 50%;
      	transform: translate(-50%,-50%);
      	z-index: 1;
      }
      .project-main{
            height: 313px;
            padding:36px 30px 0;
            border:1px solid #e5e8ef;
            border-top: 0;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
      }
      .project-list h3{
         margin:0;
        color: #333;
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      .project-list .price{
            margin-top: 10px;
            font-size: 16px;
            color: #ff734b;
      }
      .project-list .catogory-list{
            margin-top: 12px;
            height: 28px;
            overflow: hidden;
      }
      .project-list .catogory-tag{
            display: inline-block;
            height: 18px;
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
            margin:3px 5px;
      }
      .project-list .status{
            margin-top: 30px;
      }
      .project-list .status .recruiting{
            background-color:#337ab7;
      }
      .project-list .recruiting{
            display: inline-block;
            padding: 5px 10px;
            -webkit-border-radius:15px;
            -moz-border-radius:15px;
            border-radius: 15px;
            -webkit-background-clip:padding-box;
            -moz-background-clip:padding-box;
            background-clip: padding-box;
            color: #fff;
            font-size: 14px;
      }
      .project-list .bottom-data{
            margin-top: 32px;
            font-size: 14px;
      }
      .project-list .bottom-data>div{
            width: 33.3%;
            height: 38px;
            float: left;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border-right: 1px dotted #d9d9d9;
        text-align: center;
      }
      .project-list .bottom-data>div:last-child{
            border-right: 0;
      }
      .project-list .bottom-data .title{
       transform: translateY(-4px);
       color: #999;
      }
      .project-list .bottom-data .txt{
            font-size: 12px;
            color: #666;
      }
      .project-list .bottom-data .txt strong{
            font-size: 18px;
            font-weight: 400;
      }
       .project-list .project-main .time{
            margin-top: 40px;
            text-align: center;
            color:#999;
      }
      .project-list .project-main .time .txt{
            display: inline-block;
            vertical-align: middle;
      }
      </style>