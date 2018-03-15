<template>
    <div class="lives_box">
        <div class="lives_head">
                <input type="text" placeholder="不限风格/不限区域/不限时间">
            <div>
                <router-view name="lives_style"></router-view>
            </div>
        </div>
        <div class="lives_gap"></div>
        <h2>为你推荐</h2>
        <ul>
            <li>
                <h3>enen</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives01.jpg" alt="">
                <p class="lives_p1">入住新家啦，欢迎来做客</p>
                <p class="lives_p2">#日式风格&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>开耳KAYER</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives02.jpg" alt="">
                <p class="lives_p1">聆听生活的声音，开耳。</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#其他</p>
            </li>
            <li>
                <h3>怡然自得</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives03.jpg" alt="">
                <p class="lives_p1">极简，断舍离</p>
                <p class="lives_p2">#四室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>一米阳光</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives04.jpg" alt="">
                <p class="lives_p1">我家的照片马上好，一起期待</p>
                <p class="lives_p2">#三室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>打不过就跑宝宝</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives05.jpg" alt="">
                <p class="lives_p1">不为风格而风格，我喜欢的，就是我的风格</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>enen</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives01.jpg" alt="">
                <p class="lives_p1">入住新家啦，欢迎来做客</p>
                <p class="lives_p2">#日式风格&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>开耳KAYER</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives02.jpg" alt="">
                <p class="lives_p1">聆听生活的声音，开耳。</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#其他</p>
            </li>
            <li>
                <h3>怡然自得</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives03.jpg" alt="">
                <p class="lives_p1">极简，断舍离</p>
                <p class="lives_p2">#四室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>一米阳光</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives04.jpg" alt="">
                <p class="lives_p1">我家的照片马上好，一起期待</p>
                <p class="lives_p2">#三室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>打不过就跑宝宝</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives05.jpg" alt="">
                <p class="lives_p1">不为风格而风格，我喜欢的，就是我的风格</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>enen</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives01.jpg" alt="">
                <p class="lives_p1">入住新家啦，欢迎来做客</p>
                <p class="lives_p2">#日式风格&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>开耳KAYER</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives02.jpg" alt="">
                <p class="lives_p1">聆听生活的声音，开耳。</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#其他</p>
            </li>
            <li>
                <h3>怡然自得</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives03.jpg" alt="">
                <p class="lives_p1">极简，断舍离</p>
                <p class="lives_p2">#四室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>一米阳光</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives04.jpg" alt="">
                <p class="lives_p1">我家的照片马上好，一起期待</p>
                <p class="lives_p2">#三室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>打不过就跑宝宝</h3>
                <img src="http://localhost:1111/src/assets/img/lives/lives05.jpg" alt="">
                <p class="lives_p1">不为风格而风格，我喜欢的，就是我的风格</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
        </ul>
        <bottoms></bottoms>
    </div>
</template>

<script>

    import './lives.scss'
    import bottoms from '../bottomnav/bottomnav.vue'
    export default {
        components:{
            bottoms
        }
    }
</script>