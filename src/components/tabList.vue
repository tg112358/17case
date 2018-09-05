<template>
	<div>
     <div class="tabs_list removefloat " >
        <!-- <a v-for="(item,index) in tabsList"  :class="{active:index==idex}" @click="tabsAct(index)" >{{item.tabs}}</a> -->
        <router-link v-for="(item,index) in tabsList" :to="{name:item.name,params: {name: item.tabs}}"   exact tag="a" active-class="active">{{item.tabs}}</router-link>
    <!--     加上exact 属性 表示  这个链接只会在地址为 / 的时候被激活，不加的时候，每个路由都会激活当前这个路由 ，就是每个路由激活的时候 都会使得
<router-link to="/" exact>比赛数据</router-link>  多一个router-link-active 属性！  -->
    </div>
  </div>
</template>

<script> 
	export default{
        data(){
          return{
            idex:'',
            name:'',
            tabsList:[
             {
              tabs:'全部',
              name:'All'
              },
              {
              tabs:'开发',
              name:'kaifa'
              },
              {
              tabs:'设计',
              name:'sheji'
              },
              {
              tabs:'文字',
              name:'yunying'
              },
              {
              tabs:'其他',
              name:'chanpin'
              },
               ]
          }
         },
    
  methods: {
    tabsAct (a) {
     //this.isShow=false  导致dialog只能弹出一次
     this.$emit('tabslist-act',a)
    },
/*    test(idex){

    }*/
  },

	}
</script>
<style>
    .tabs_list{
    	border-bottom:1px solid #ccc;
		line-height: 52px;
		margin-top: 18px;
    }
	.tabs_list a{
		float: left;
		padding: 0 18px;
		font-size: 16px;
		color: #999;
		cursor: pointer;
	}
	.tabs_list .active{
		color: #333;
		line-height: 49px;
		font-weight: 700;
		border-bottom: 3px solid #2b2d2e;
		margin-bottom:-1px; 
	}
   
</style>