<template>
   <div class="container" id="DetailPage">
      <article id="carousel_detail">
          <div><img src="~IMG/sofa1.jpg"/></div>
          <div><img src="~IMG/sofa2.jpg"/></div>
          <div><img src="~IMG/sofa3.jpg"/></div>
          <div><img src="~IMG/sofa4.jpg"/></div>
          <div><img src="~IMG/sofa5.jpg"/></div>
      </article>
      <aside id="safeguard">
          <span><i class="fa fa-check-circle"></i> 七天无理由退换货</span>
          <span><i class="fa fa-check-circle"></i> 三年质保终身维护</span>
          <span><i class="fa fa-check-circle"></i> 保价180天</span>
      </aside>
      <main>
        
      <article id="details">
          <h3 class="title">贝洛餐椅</h3>
          <p class="desc">意大利原装进口，头层牛皮</p>
          <p class='price'>$3243</p>
          <div class="size">
            <span>单人款</span>
            <span>双人款</span>
            <span>多功能款</span>
          </div>
          <div class="pay">
            <i class="fa fa-cc-visa"></i>
            <i class="fa fa-cc-paypal"></i>
            <i class="fa fa-google-wallet"></i>
          </div>
          <h3 class="base"> <i class="fa fa-tags"></i> 商品基础信息</h3>
          <p class="base_det"><i class="fa fa-dot-circle-o"></i><i class='base_'>商品风格</i><span>现代简约</span></p>
          <p class="base_det"><i class="fa fa-dot-circle-o"></i><i class="base_">主材</i><span>头层牛皮</span></p>
          <p class="base_det"><i class="fa fa-dot-circle-o"></i><i class="base_">交货期</i><span>5-9天</span></p>
      </article>
      <article id="showGoods">
          <p><i class="fa fa-amazon"></i> 商品详情</p>
          <div>
            <img src="~IMG/details/detail1.jpg"/>
            <img src="~IMG/details/detail2.jpg"/>
            <img src="~IMG/details/detail3.jpg"/>
            <img src="~IMG/details/detail4.jpg"/>
            <img src="~IMG/details/detail5.jpg"/>
            <img src="~IMG/details/detail6.jpg"/>
            <img src="~IMG/details/detail7.jpg"/>
            <img src="~IMG/details/detail8.jpg"/>
            <img src="~IMG/details/detail9.jpg"/>
            <img src="~IMG/details/detail10.jpg"/>
            <img src="~IMG/details/detail11.jpg"/>
            <img src="~IMG/details/detail12.jpg"/>
          </div>
      </article>
      </main> 
      <bottoms></bottoms>
   </div>
</template>

<script>
  import bottoms from '../bottomnav/bottomnav.vue';
  import "./detail.scss";
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
       data(){
           return{
               text:'这是详情组件',
           }
       },
       methods:{
          
       },
       components:{
        bottoms
       },
       computed:{
           
       }
   }
</script>