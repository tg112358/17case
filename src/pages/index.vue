<template>
  <div>
    <slide ></slide>
    <div class="content"> 
      <person></person>
      <type></type>
      <project></project>
    </div>
  </div>
</template>

<script>


import slide from '@/components/slide'
import person from '@/components/person'
import type from '@/components/projectype'
import project from '@/components/project1'
export default {
  components:{
  slide,
  person,
  type,
  project
  },
  data(){
    return{

          }
  },
  methods:{

  }
}
</script>

<style>
  .nav-banner{
    position: relative;
  }
  .content{
    min-width: 1200px;
    min-height: 500px;
    margin:0 auto;
    background-color: rgb(242,242,242);
  }
</style> 