<template>
  <div id="page">
      <div class="top">123</div>
      <div id="bottom" ref="bottom">
          <ul>
              <li v-for="(obj,idx) in dataset">{{obj.CourseType}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import lazyLoad from "./lazyLoad.scss";
import http from 'axios'; 
var index = 1;
export default { 
    data(){
        return{
            dataset:[]
        }
    },
    beforeMount(){
        // http.get(,{params:{data:JSON.stringify({
        //     Page:1
        // })}).then((res)=>{
        //     console.log(res)
        //     this.dataset = res.data.data.results;
        // })
        http.get('http://10.3.136.54:88/FilterCourseList',{params:{data:JSON.stringify({Page:1})}}).then((res)=>{console.log(res)});
    },
  mounted(){
      console.log(this.$refs.bottom)
      console.log(this.$refs.bottom.scrollTop);
      window.addEventListener('scroll',()=>{
          if(document.documentElement.scrollTop > (document.querySelector('ul').clientHeight)){
              index ++;
          }
          /* console.log(index,document.documentElement.scrollTop,(document.querySelector('li').clientHeight * index)); */
      })

  }
}
</script>

