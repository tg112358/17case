<template>
  <div>
    <div class="dialog-wrap" >
      <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
             <transition name="drop">  <!-- 必须紧跟着v-if 过渡标签   name-->
<!--  
  visibility:hidden;看不见但摸得到
 -->
        <div class="dialog-content" v-if="isShow">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>  <!--插槽-->
        </div>
           </transition>
    </div>
  </div>
</template>

<script>
export default {
	/*父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。*/
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    closeMyself () {
     //this.isShow=false  导致dialog只能弹出一次
     this.$emit('on-close')
    }
  }
}
</script>

<style scoped>

.drop-enter-active {       
  transition: all .5s ease;
}
  /*
  all表示元素改变的所有的目标值
  */

  /*
  transition指过渡啦，就是从a点都b点，就像过江坐渡轮，是有时间的，是连续的，一般针对常规CSS属性；transform指变换，就那几个固定的属性：旋转啦，缩放啦，偏移啦什么的，
  */

  /*
  transition-timing-function

    既然是动画，那么就有动画的运行速率，不同的速度会产生不同的结果，以下是可取值。

    ease：（逐渐变慢）默认值，ease函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).
    linear：（匀速），linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).
    ease-in：(加速)，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).
    ease-out：（减速），ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).
    ease-in-out：（加速然后减速），ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
    }
    */


/*
 定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。 
 */
.drop-leave-active {
  transition: all .3s ease;
}
/*
 定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。 
 */
.drop-enter {
  transform: translateY(-500px);
}
.drop-enter-to {
  transform: translateY(0px);
}
/* 
定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
 */
.drop-leave {
  transform: translateY(0px);
}
.drop-leave-to {
  transform: translateY(-500px);
}


.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  padding:3%  5% 20px;
  position: fixed;
  top: 15%;
  left: 32%;
  width: 306px;
  background-color: #fff;
  z-index: 999;
  border: 2px solid #464068;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}

</style>
