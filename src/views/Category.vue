<template>
    <div id='category'>
      <van-search placeholder="商品搜索 共239万款好物" input-align='center' v-model="searchData"></van-search>
      <van-tree-select
        :items="items"
        :main-active-index.sync="activeIndex"
        height="calc(100vh - 104px)"
        @click-nav="changeRight"
      >
        <template slot="content">
          <div class="imgbanner">
            <img :src="bannerImg" width="100%">
          </div>
          <van-grid :column-num="3">
            <van-grid-item v-for="(item,index) in subCategoryList" :key="index"
                           :icon="item.wap_banner_url" :text="item.name" :to="'/categoryList/'+item.id">
<!--              <img slot="icon" :src="item.wap_banner_url">-->
            </van-grid-item>
          </van-grid>
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
      // items: [{ text: '分组 1' }, { text: '分组 2' }],
      activeIndex: 0,
      subCategoryList: [],
      data: {},
      bannerImg: ''

    }
  },
  async created () {
    const res = await axios.get(api.CatalogList)
    const data = res.data
    this.data = data.data
    this.bannerImg = this.data.currentCategory.img_url
    console.log(data)
  },
  computed: {
    items: function () {
      if (this.data.categoryList === undefined) {
        return []
      } else {
        const arr = []
        this.data.categoryList.forEach((item, index) => {
          item.text = item.name
          arr.push(item)
        })
        return arr
      }
    }
  },
  methods: {
    changeRight (index) {
      console.log(index)
      this.activeIndex = index
    }
  },
  watch: {
    activeIndex: async function () {
      if (this.items.length !== 0) {
        const id = this.items[this.activeIndex].id
        // eslint-disable-next-line vue/no-async-in-computed-properties
        const res = await axios.get(api.CatalogCurrent, { params: { id } })
        this.subCategoryList = res.data.data.currentCategory.subCategoryList
        this.bannerImg = this.items[this.activeIndex].img_url
      } else {
        this.subCategoryList = []
      }
    }
  },
  components: {
    'tab-btn': TabBtn
  }
}
</script>

<style lang="less">
#category{
  .imgbanner{
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
