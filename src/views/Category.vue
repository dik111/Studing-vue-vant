<template>
    <div id='category'>
      <van-search placeholder="商品搜索 共239万款好物" input-align='center' v-model="searchData"></van-search>
      <van-tree-select
        :items="items"
        :main-active-index.sync="activeIndex"
      >
        <template #content>
          <van-image
            v-if="active === 0"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
          <van-image
            v-if="active === 1"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </template>
      </van-tree-select>

      <tab-btn></tab-btn>
    </div>
</template>

<script>
import TabBtn from '../components/TabBtn'
import axios from 'axios'
import api from '../assets/config/api.js'
export default {
  name: 'Category',
  data () {
    return {
      searchData: '',
      items: [{ text: '分组 1' }, { text: '分组 2' }],
      activeIndex: 0

    }
  },
  async created () {
    const res = await axios.get(api.CatalogList)
    const data = res.data
    console.log(data)
  },
  components: {
    'tab-btn': TabBtn
  }
}
</script>

<style scoped>

</style>
