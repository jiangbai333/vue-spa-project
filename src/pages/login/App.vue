<template>
  <div>
    <Layout :style="{minHeight: '100vh'}">
    <h></h>
    </Layout>
  </div>
</template>

<script>
import h from './components/common/header.vue';

export default {
  name: 'app',
  data () {
    return { }
  },
  mounted () {
    // Dom渲染完成后执行的内容
  },
  methods: {
    collapseing: function(a) { },
  },
  components:{
    h
  }
}
</script>
