<template>
    <div>
        <ul class="listImg_L">
            <li>
                <router-link to="/categoryList_LR">
                    <img src="http://localhost:1111/src/assets/img/category/livingroom.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/categoryList_DR">
                    <img src="http://localhost:1111/src/assets/img/category/diningroom.png" alt="">
                </router-link>
            </li>
            <li><img src="http://localhost:1111/src/assets/img/category/bedroom.png" alt=""></li>
            <li><img src="http://localhost:1111/src/assets/img/category/office.png" alt=""></li>
            <li><img src="http://localhost:1111/src/assets/img/category/kids.png" alt=""></li>
            <li><img src="http://localhost:1111/src/assets/img/category/others.png" alt=""></li>
        </ul>
    </div>
</template>

<script>
    import '../common/common.scss'
    export default{
        beforeMount(){
            
        }
    }
</script>
