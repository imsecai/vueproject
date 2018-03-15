<template>
   <div class="container" id="homepage">
       <header id="header"><p>搜索框</p></header>
       <main>
          <article id="carousel_home" @click="toDetail">
                <div v-for="item in bannerSrc"><img :src="'./src/assets/images/banner/'+item"/></div>
          </article>
          <aside id="safeguard" >
              <ul>
                <li><i class="fa fa-handshake-o"></i> 品牌制造商直供</li>
                <li><i class="fa fa-gift"></i> 七天无理由退换</li>
                <li><i class="fa fa-map-marker"></i> 线下真实体验</li>
              </ul>
          </aside>
          <article id="brand">
              <header>
                <span>大牌制造商直供</span>
                <span>查看更多 &nbsp;<i class="fa fa-chevron-right"></i></span>
              </header>
              <section>
                <div><img src="~IMG/brand1.png"/></div>
                <div class="brand_r">
                  <img src="~IMG/brand2.png"/>
                  <img src="~IMG/brand3.png"/>
                </div>
              </section>
          </article>
          <article id="newGoods">
            <header>
                <span>本期新品</span>
                <span>查看更多 &nbsp;<i class="fa fa-chevron-right"></i></span>
            </header>
            <ul>
              <li><img src="./img/new1.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">￥34543</p></li>
            </ul>
          </article>
          <!-- <article id="goodsShow1">
            <p class="gs_p1">精品推荐</p>
            <ul>
              <li><img src="./img/goods/sofa1.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa2.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa3.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa4.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa5.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa6.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
            </ul>
          </article>
          <article id="goodsShow2">
            <p class="gs_p1">沙发</p>
            <ul>
              <li><img src="./img/goods/sofa1.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa2.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa3.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa4.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa5.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
              <li><img src="./img/goods/sofa6.jpg" /><p class="p1">贝洛电视柜</p><p class="p2">意大利手工打造，真品保证，无理由退货</p><p class="p3">￥34543</p></li>
            </ul>
          </article> -->
          <aside id="end">
            <p>体验更多好家具，就在 生活之家</p>
            <p>- -END- - <i class="fa fa-refresh fa-spin" ></i></p>
          </aside>
       </main>
       <bottoms></bottoms>
   </div>
</template>
<script>
  import "./jquery-3.3.1.min.js";
  import "./carousel/slick/slick.css";
  import "./carousel/slick/slick.min.js";
  import bottoms from '../bottomnav/bottomnav.vue'
  // import "./base.css";
  import "./home.scss";
  import http from '../../httpClient/httpClient.js';
  jQuery(($)=>{
    $('#carousel_home').slick({
      autoplay:true,
      autoplaySpeed:2500,
      arrows:false,
      mobileFirst:true,
      speed: 600,
      slidesToShow: 1,
      dots:true
    });
    $('#carousel_home button').remove();
    $('#newGoods ul').slick({
      arrows:false,
      slidesToShow:2.4,
      slidesToScroll:2,
      mobileFirst:true,
      autoplay:true,
      autoplaySpeed:3000,
      speed:600
    });
  })
   export default{
      mounted:function(){
              console.log('mounted');
              http.get('NewProduct',{Transport:3}).then((result)=>{
                console.log(result.data.data.results);
                this.goodData=result.data.data.results;
              })
      },
       data(){
           return{
               goodData:[],
               bannerSrc:["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"],
               newSrc:['new1.jpg','new2.jpg','new3.jpg','new4.jpg','new5.jpg']
           }
       },
       methods:{
           toDetail:()=>{
              console.log(45646)
              http.get('NewProduct',{style:'现代简约'}).then((result)=>{
                console.log(result.data.data.results);
                this.goodData=result.data.data.results;
              })
           }
       },
       components:{
          bottoms
       },
       computed:{
           
       }
   }
</script>