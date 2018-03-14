<template>
    <div>
        <ul class="listImg">
            <li>
                <router-link to="/categoryList">
                    <img src="http://localhost:1111/src/img/category/livingroom.png" alt="">
                </router-link>
            </li>
            <li><img src="http://localhost:1111/src/img/category/diningroom.png" alt=""></li>
            <li><img src="http://localhost:1111/src/img/category/bedroom.png" alt=""></li>
            <li><img src="http://localhost:1111/src/img/category/office.png" alt=""></li>
            <li><img src="http://localhost:1111/src/img/category/kids.png" alt=""></li>
            <li><img src="http://localhost:1111/src/img/category/others.png" alt=""></li>
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
