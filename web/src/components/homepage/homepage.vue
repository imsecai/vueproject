<template>
   <div class="container" id="homepage">
        <header id="header">
            <div class="head">
                <div class="head_left">
                    <input type="text" placeholder="搜索品类/单品/风格">
                    <div class="buycar">
                        <router-link to="shopCar">
                        <i class="iconfont icon-gouwuche"></i>
                        
                        <i class="iconfont icon-shoucang"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </header>
       <main>
          <article id="carousel_home" @click="toList">
                <div v-for="item in bannerSrc"><img :src="'./src/assets/images/banner/'+item"/></div>
          </article>
          <aside id="safeguard" @click="toList">
              <ul>
                <li><i class="fa fa-handshake-o"></i> 品牌制造商直供</li>
                <li><i class="fa fa-gift"></i> 七天无理由退换</li>
                <li><i class="fa fa-map-marker"></i> 线下真实体验</li>
              </ul>
          </aside>
          <article id="brand" @click="toList">
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
                <span @click="toList">查看更多 &nbsp;<i class="fa fa-chevron-right"></i></span>
            </header>
            <ul id="ng">
              <li v-for="(obj,idx) in newSrc" :data-pID=obj.pID><img :src="'./src/assets/productimg/'+obj.Img1"  @click="toDetail(obj.pID)"/><p class="p1">{{obj.Title}}</p><p class="p2">￥{{obj.Price}}</p></li>
            </ul>
          </article>
          <article id="goodsShow1">
            <p class="gs_p1">精品推荐</p>
            <ul>
              <li v-for="(obj,idx) in showSrc" :data-pID=obj.pID><img :src="'./src/assets/productimg/'+obj.Img1" @click="toDetail(obj.pID)"/><p class="p1">{{obj.Title}}</p><p class="p2">{{obj.Describe}}</p><p class="p3">￥{{obj.Price}}</p></li>
            </ul>
          </article>
          <article id="goodsShow2">
            <p class="gs_p1">床</p>
            <ul>
              <li v-for="(obj,idx) in bedSrc" :data-pID=obj.pID><img :src="'./src/assets/productimg/'+obj.Img1" @click="toDetail(obj.pID)"/><p class="p1">{{obj.Title}}</p><p class="p2">{{obj.Describe}}</p><p class="p3">￥{{obj.Price}}</p></li>
            </ul>
          </article>
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
  import bottoms from '../bottomnav/bottomnav.vue';
  import "./home.scss";
  import http from '../../httpClient/httpClient.js';
  import router from "../../router/index.js"
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
    $('#ng').slick({
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
              http.get('NewProduct').then((result)=>{
                this.newSrc=result.data.data.results;
              });
              http.get('ShowProduct').then((result)=>{
                this.showSrc=result.data.data.results;
              });
              http.get('Bed').then((result)=>{
                this.bedSrc=result.data.data.results;
              });
      },
      updated:function(){
        
      },
       data(){
           return{
               showSrc:[],
               bedSrc:[],
               newSrc:[],
               bannerSrc:["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"]
           }
       },
       methods:{
           toDetail:(pID)=>{
              router.push('Detail/'+pID);
           },
           toList:()=>{
              router.push('ListPage');
           }
       },
       components:{
          bottoms
       }
   }
</script>