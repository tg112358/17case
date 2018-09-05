<template>
  <div id="app">
    <Header ></Header>
    <router-view ></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
    isShowLogDialog:'',
  },

}
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,input,textarea,p,blockquote,th,td{margin:0;padding:0}
table{border-collapse:collapse;border-spacing:0}
img{border:0}
ol,ul{list-style:none}
th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
q:before,q:after{content:''}
a{text-decoration:none; color: #fff;}
input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}
input,textarea,select{*font-size:100%}
html {
    font-size: 14px;
    width: 100%;
    height: 100%
}
body{
  width: 100%;
  min-width: 1200px;
  height: 100%;
  color: #333;
  font-family:  "Microsoft Yahei", SimSun, Arial, "Helvetica Neue", Helvetica;
 } 
 h3{
  font-size: 26px;
}
pre {
    font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
    white-space: pre-wrap;/* 保留空白符序列 */
    word-break: break-all;
}

  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .removefloat:before,.removefloat:after{
    content: "";
    display: table;
  }
  .removefloat:after{
    clear: both;
  }
  .removefloat{
    zoom:1;
  }
</style>
