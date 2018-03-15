<template>
   <div class="container" id="DetailPage">
      <article id="carousel_detail">
          <div v-for="(val,key) in GoodsData" v-if="key.indexOf('Img')>-1"><img :src="'./src/assets/productimg/'+val"/></div>
      </article>
      <aside id="safeguard">
          <span><i class="fa fa-check-circle"></i> 七天无理由退换货</span>
          <span><i class="fa fa-check-circle"></i> 三年质保终身维护</span>
          <span><i class="fa fa-check-circle"></i> 保价180天</span>
      </aside>
      <main>
      <article id="details">
          <h3 class="title">{{this.GoodsData.Title}}</h3>
          <p class="desc">{{this.GoodsData.Describe}}</p>
          <p class='price'>￥ {{this.GoodsData.Price}}</p>
          <div class="size">
            <span @click="Getsize($event)" class="sel_size">单人款</span>
            <span @click="Getsize($event)">双人款</span>
            <span @click="Getsize($event)">多功能款</span>
          </div>
          <div class="pay">
            <i class="fa fa-cc-visa"></i>
            <i class="fa fa-cc-paypal"></i>
            <i class="fa fa-google-wallet"></i>
          </div>
          <h3 class="base"> <i class="fa fa-tags"></i> 商品基础信息</h3>
          <p class="base_det"><i class="fa fa-dot-circle-o"></i><i class='base_'>商品风格</i><span>{{this.GoodsData.Style}}</span></p>
          <p class="base_det"><i class="fa fa-dot-circle-o"></i><i class="base_">主材</i><span>{{this.GoodsData.Material}}</span></p>
          <p class="base_det"><i class="fa fa-dot-circle-o"></i><i class="base_">交货期</i><span>{{this.GoodsData.Transport}}~{{2+(this.GoodsData.Transport*1)}}天</span></p>
      </article>
      <article id="showGoods">
          <p><i class="fa fa-amazon"></i> 商品详情</p>
          <div>
            <img :src="'./src/assets/images/details/'+item" v-for="item in DetailSrc"/>
          </div>
      </article>
      <article id="buy">
          <div><span>立即购买</span><span>加入购物车</span></div>
      </article>
      </main> 
   </div>
</template>

<script>
  import "./detail.scss";
  import http from "../../httpClient/httpClient.js";
  jQuery(($)=>{
    $('#carousel_detail').slick({
      autoplay:true,
      autoplaySpeed:2500,
      arrows:false,
      mobileFirst:true,
      speed: 600,
      slidesToShow: 1,
      dots:true
    });
    $('#carousel_detail button').remove();
  })
   export default{
      mounted:function(){
        http.get('Detail',{pID:this.$route.params.pID}).then((result)=>{
                this.GoodsData=result.data.data.results[0];
              });
      },
       data(){
           return{
               GoodsData:[],
               size:"单人款",
               DetailSrc:["detail1.jpg","detail2.jpg","detail3.jpg","detail4.jpg","detail5.jpg","detail6.jpg","detail7.jpg","detail8.jpg","detail9.jpg","detail10.jpg","detail11.jpg","detail12.jpg"]
           }
       },
       methods:{
          Getsize(event){
            this.size=event.target.innerText;
            console.log(event.target)
            event.target.classList.add('sel_size');

          }
       },
       components:{
        
       },
       computed:{
           
       }
   }
</script>