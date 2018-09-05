<template>
  <div class="project-types">
      <h3 class="free-h3">免费发布项目，1小时内为你成功对接专家</h3>
        <div class="free-h3-tips">领域大神把关，平台保证项目质量</div>
        <ul class="project-type-cont removefloat">
          <li v-for="(list,index) in ProjectType">

            <div class="first-type-cont">
               <img :src="list.img">
               <div class="first-type">{{list.tpname}}</div>
            </div>

            <div class="main-category table">
              <div class="table-row">
                <div class="table-cell">
                  <h4>{{list.tpname}}</h4>
                    <div class="second-type-cont">
                  <a v-for="tplist in list.tpmain">{{tplist.name}}</a>

                     </div>
                </div>
              </div>
            </div>
            
          </li>
        </ul>
  </div>
</template>

<script>


export default {
data(){
  return{
      ProjectType:[
      {
          tpname:'开发',
          img:require('../img/indexpic/fourtypes/qwe_01.gif'),
          tpmain:[
          {
            name:'微信开发'
          },
          {
            name:'/ H5开发'
          },
          {
            name:'/ 后端开发'
          },
          {
            name:'/ APP开发'
          },
          {
            name:'/ Web网站开发'
          },
          ]
      },
      {
          tpname:'设计',
          img:require('../img/indexpic/fourtypes/qwe_02.gif'),
          tpmain:[
          {
            name:'平面设计'
          },
          {
            name:'/ UI设计'
          },
          {
            name:'/ 交互设计'
          },
          {
            name:'/ CAD设计'
          },
          {
            name:'/ 动画设计'
          },
          ]
      },
      {
          tpname:'文字',
          img:require('../img/indexpic/fourtypes/qwe_03.gif'),
          tpmain:[
          {
            name:'需求文档撰写'
          },
          {
            name:'/ 文案修改'
          },
          {
            name:'/ 文字校对'
          },
          {
            name:'/ 撰写稿件'
          },
          {
            name:'/ 项目文档撰写'
          },
          ]
      },
      {
           tpname:'其他',
           img:require('../img/indexpic/fourtypes/qwe_04.gif'),
          tpmain:[
          {
            name:'微信开发'
          },
          {
            name:'/ H5开发'
          },
          {
            name:'/ 后端开发'
          },
          {
            name:'/ APP开发'
          },
          {
            name:'/ Web网站开发'
          },
          ]
      },
      ],
  }
}

}
</script>

<style>
.project-types{
  width: 1220px;
  margin: 0 auto;
}
.project-type-cont{
    margin-top:52px;
    text-align: center;
  }
  .project-type-cont li:first-child{
    margin-left: 0;
  }
  .project-type-cont li .lawyer{
    position: absolute;
    width: 600px;
    height: 335px;
    background-color: rgba(0,105,255,.5);
  }
  .project-type-cont li img{
    width: 100%;
   height: 100%;
  }
  .first-type-cont .first-type{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    font-size: 32px;
    font-weight: 600;

  }
  .project-type-cont li{
    position: relative;
    width: 600px;
    height: 335px;
    background-color: rgb(238,237,246);
    float: left;
  }

  .first-type-cont{
   width: 100%;
   height: 100%;
  }
  .main-category{
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .main-category:hover{
    opacity: 1;
    background-color: rgb(51,153,255);
  }
  
  .table{
    display: table;  /*此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。*/
  }
  .table-row{
    display: table-row; /*  此元素会作为一个表格行显示（类似 <tr>）。*/
  }
  .table-cell{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    vertical-align: middle;
    margin:0 20px;
    display: table-cell; /* 此元素会作为一个表格单元格显示（类似 <td> 和 <th>）*/
  }
  .project-type-cont h4{
    display: inline-block;
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 18px;
    border-bottom: 3px solid #333;
  }
    .second-type-cont a{
      color: #333;
      display: inline-block;
    }
     .second-type-cont a:first-child{
      margin-left: 19px;
    }
     .second-type-cont a{
      margin-right:7px;
    }
  /*垂直居中
  display: table;  /*此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。
  display: table-row; 此元素会作为一个表格行显示（类似 <tr>）。
  display: table-cell; 此元素会作为一个表格单元格显示（类似 <td> 和 <th>）+vertical-align: middle;
  是因为td元素具有valign属性，而vertical-align:middle只会在具有valign属性的对象中生效，所以上面代码就成功实现了垂直居中效果*/
  .second-type-cont{
    font-size: 18px;
    line-height: 30px;
        margin-top: 4px;
  } 
</style> 