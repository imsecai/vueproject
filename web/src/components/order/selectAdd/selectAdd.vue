<template>
  <div id="selectAdd">
        <div class="header">
            <ul class="selectAdd-title">
                <li><router-link to="/order">&lt;</router-link></li>
                <li>选择收货地址</li>
                <li></li>
            </ul>
        </div>

      <div class="main">
        <div>
        </div>
      </div>
      
      <router-link to="addAdd">
          <div class="footer">
          添加新地址
          </div>
      </router-link>
     

  </div>
</template>

<script>
import './selectAdd.scss';
export default {
  
}
</script>
