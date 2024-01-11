<template>
  <div class="main">
    <img src="@/assets/b1.jpeg" height="100%" width="100%" alt="">
    <div class="title" @click="getPrice">莱沃云创科技有限公司年会</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      src: "@/assets/b1.jpg"
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    getPrice() {
      this.$router.push({
          path: `/jiang`,
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;

  .title {
    color: #FFF;
    font-Weight: bold;
    font-size: 40px;
    position: absolute;
    top: 10%;
    left: 50%;
    cursor: pointer;
    transform: translate(-50%, -50%)
  }
}
</style>