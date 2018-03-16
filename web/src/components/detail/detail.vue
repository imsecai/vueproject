<template>
   <div class="container" id="DetailPage">
    <i id="pre" class="fa fa-chevron-circle-left" @click="back"></i>   
    <div id="slide">
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
              <span class="chose sel_size" @click="Getsize($event)">单人款</span>
              <span class="chose" @click="Getsize($event)">双人款</span>
              <span class="chose" @click="Getsize($event)">多功能款</span>
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
      </main>
    </div>
      <footer id="buynow">
          <span id="tocar" @click="tocar">立即购买 <i class="fa fa-cart-arrow-down"></i></span><span id="incar" @click="incar">加入购物车 <i class="fa fa-cart-plus"></i></span>
      </footer> 
   </div>
</template>

<script>
  import "./detail.scss";
  import http from "../../httpClient/httpClient.js";
  import router from "../../router"
  
   export default{
      mounted:function(){
        this.pID=this.$route.params.pID;
        http.get('Detail',{pID:this.pID}).then((result)=>{
                this.GoodsData=result.data.data.results[0];
              });
        http.get('getBuyList').then((res)=>{
          this.buylist=res.data.data.results;
        })
      },
      updated:function(){
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
          });
      },
       data(){
           return{
               GoodsData:[],
               buylist:[],
               pID:'',
               size:"单人款",
               DetailSrc:["detail1.jpg","detail2.jpg","detail3.jpg","detail4.jpg","detail5.jpg","detail6.jpg","detail7.jpg","detail8.jpg","detail9.jpg","detail10.jpg","detail11.jpg","detail12.jpg"]
           }
       },
       methods:{
          Getsize(event){
            this.size=event.target.innerText;
            var spans=document.querySelectorAll('.chose');
            spans.forEach((item)=>{
              item.classList.remove("sel_size");
            })
            event.target.classList.add('sel_size');
          },
          tocar(){
            this.incar();
            router.push('/shopCar');
          },
          incar(){
            for(var i=0;i<this.buylist.length;i++){
              if(this.buylist[i].buyID == this.pID){
                http.post('modifyList',{pID:this.pID}).then((res)=>{
                })
                return
              }
            }
            if(i==this.buylist.length){
               var buy={buyID:this.$route.params.pID,Qty:1,Title:this.GoodsData.Title,Material:this.GoodsData.Material,Price:this.GoodsData.Price,Size:this.size,Img1:this.GoodsData.Img1}
                this.buylist.push(buy);
                http.post('inbuylist',buy).then((res)=>{
                })
            }
          },
          back(){
            history.back();
          }
       }
   }
</script>