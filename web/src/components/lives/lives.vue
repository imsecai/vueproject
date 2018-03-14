<template>
    <div class="lives_box">
        <div class="lives_head">
            <router-link to="/lives/lives_style">
                <input type="text" placeholder="不限风格/不限区域/不限时间">
            </router-link>
            <div>
                <router-view name="lives_style"></router-view>
            </div>
        </div>
        <div class="lives_gap"></div>
        <h2>为你推荐</h2>
        <ul>
            <li>
                <h3>enen</h3>
                <img src="http://localhost:1111/src/img/lives/9801a70f183f8147c53bc6c9a568702ae4e7b65e.jpg" alt="">
                <p class="lives_p1">入住新家啦，欢迎来做客</p>
                <p class="lives_p2">#日式风格&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>开耳KAYER</h3>
                <img src="http://localhost:1111/src/img/lives/2340edaf0aafd5ae47b5cd18aff3e21d652796e6.jpg" alt="">
                <p class="lives_p1">聆听生活的声音，开耳。</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#其他</p>
            </li>
            <li>
                <h3>怡然自得</h3>
                <img src="http://localhost:1111/src/img/lives/68eadb60334df8c0b325c8bc8a3fe1b367a55d87.jpg" alt="">
                <p class="lives_p1">极简，断舍离</p>
                <p class="lives_p2">#四室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>一米阳光</h3>
                <img src="http://localhost:1111/src/img/lives/9801a70f183f8147c53bc6c9a568702ae4e7b65e.jpg" alt="">
                <p class="lives_p1">我家的照片马上好，一起期待</p>
                <p class="lives_p2">#三室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>打不过就跑宝宝</h3>
                <img src="http://localhost:1111/src/img/lives/c3e4640ad034c4b3f40f7933c25511d57b0482a0.jpg" alt="">
                <p class="lives_p1">不为风格而风格，我喜欢的，就是我的风格</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>enen</h3>
                <img src="http://localhost:1111/src/img/lives/9801a70f183f8147c53bc6c9a568702ae4e7b65e.jpg" alt="">
                <p class="lives_p1">入住新家啦，欢迎来做客</p>
                <p class="lives_p2">#日式风格&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>开耳KAYER</h3>
                <img src="http://localhost:1111/src/img/lives/2340edaf0aafd5ae47b5cd18aff3e21d652796e6.jpg" alt="">
                <p class="lives_p1">聆听生活的声音，开耳。</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#其他</p>
            </li>
            <li>
                <h3>怡然自得</h3>
                <img src="http://localhost:1111/src/img/lives/68eadb60334df8c0b325c8bc8a3fe1b367a55d87.jpg" alt="">
                <p class="lives_p1">极简，断舍离</p>
                <p class="lives_p2">#四室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>一米阳光</h3>
                <img src="http://localhost:1111/src/img/lives/9801a70f183f8147c53bc6c9a568702ae4e7b65e.jpg" alt="">
                <p class="lives_p1">我家的照片马上好，一起期待</p>
                <p class="lives_p2">#三室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>打不过就跑宝宝</h3>
                <img src="http://localhost:1111/src/img/lives/c3e4640ad034c4b3f40f7933c25511d57b0482a0.jpg" alt="">
                <p class="lives_p1">不为风格而风格，我喜欢的，就是我的风格</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>enen</h3>
                <img src="http://localhost:1111/src/img/lives/9801a70f183f8147c53bc6c9a568702ae4e7b65e.jpg" alt="">
                <p class="lives_p1">入住新家啦，欢迎来做客</p>
                <p class="lives_p2">#日式风格&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
            <li>
                <h3>开耳KAYER</h3>
                <img src="http://localhost:1111/src/img/lives/2340edaf0aafd5ae47b5cd18aff3e21d652796e6.jpg" alt="">
                <p class="lives_p1">聆听生活的声音，开耳。</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#其他</p>
            </li>
            <li>
                <h3>怡然自得</h3>
                <img src="http://localhost:1111/src/img/lives/68eadb60334df8c0b325c8bc8a3fe1b367a55d87.jpg" alt="">
                <p class="lives_p1">极简，断舍离</p>
                <p class="lives_p2">#四室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>一米阳光</h3>
                <img src="http://localhost:1111/src/img/lives/9801a70f183f8147c53bc6c9a568702ae4e7b65e.jpg" alt="">
                <p class="lives_p1">我家的照片马上好，一起期待</p>
                <p class="lives_p2">#三室两厅&nbsp;&nbsp;&nbsp;&nbsp;#体验券</p>
            </li>
            <li>
                <h3>打不过就跑宝宝</h3>
                <img src="http://localhost:1111/src/img/lives/c3e4640ad034c4b3f40f7933c25511d57b0482a0.jpg" alt="">
                <p class="lives_p1">不为风格而风格，我喜欢的，就是我的风格</p>
                <p class="lives_p2">#现代简约&nbsp;&nbsp;&nbsp;&nbsp;#三室两厅</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import '../../common/common.scss'
    import './lives.scss'

    export default {}
</script>