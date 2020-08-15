<template>
      <van-tabbar v-model="tabActive">
        <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
        <van-tabbar-item icon="search">专题</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to='/category'>分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
</template>

<script>
export default {
  name: 'TabBtn',
  data () {
    return {
      tabActive: 0
    }
  },
  mounted () {
    switch (this.$route().path) {
      case '/category' :
        this.tabActive = 2
        break
      case '/' :
        this.tabActive = 0
        break
      default:
        this.tabActive = 0
        break
    }
  }
}
</script>

<style scoped>

</style>
