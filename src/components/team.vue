<template>
	<div class="team" >
	 <div class="person-list-team"> 
      <h4 class="free-h4">交付型专业团队/工作室</h4>
      <div class="list-team removefloat">
        <ul class="removefloat">
          <li class="fl" v-for="(teamlist,index) in personteamLists">
            <a>
              <img class="head-pic" :src="teamlist.img">
              <div class="title">{{teamlist.title}}</div>
              <div class="self-title">{{teamlist.slftitle}}</div>
              <ul class="products removefloat">
                <li v-for="(list,index) in teamlist.decList">
                  <svg class="icon-appreciate" aria-hidden="true">
                    <use xlink:href="#icon-appreciate"></use>
                  </svg>
                  {{list.dec}}
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>

<script>

	export default{
	props: {

  	},
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
 .person-list-team a{
      color: #333;
     }
     .list-team{
      width: 1220px;
      margin: 0 auto;
     }
     .list-team>ul{
      margin:0 auto;
     }
    .list-team>ul>li{
      text-align: center;
      margin-left: 20px;
     }
      .list-team>ul>li .title{
            margin-top: 18px;
      }
     .list-team>ul>li:first-child{
      margin-left: 0;
     }
     .list-team>ul>li>a{
      position: relative;
      width: 245px;
      height: 296px;
      margin-bottom: 50px;
      padding: 34px 20px 0;
      z-index: 1;
      border-radius: 6px;
      background-color: #fff;
      display: block;
     }
     .list-team>ul>li>a>img{
      border-radius: 3px;
      width: 60px;
      height: 60px;
     }
     .list-team .self-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      color: #999;
     }
     .products{
      margin-top: 24px;
      text-align: left;
      line-height: 30px;
      padding: 0 40px;
     }
     .products li{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      }
	</style>