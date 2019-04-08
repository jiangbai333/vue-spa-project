<template>
  <div>
    <Layout :style="{minHeight: '100vh'}">
      <h></h>
      <Layout>
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed" @on-collapse="collapseing">
          <m></m>
        </Sider>
        <Content :style="{padding: '1%'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import h from './components/common/header.vue';
import m from './components/common/navigation.vue';

export default {
  name: 'app',
  data () {
    return {
      isCollapsed: false,
    }
  },
  mounted () {
    // Dom渲染完成后执行的内容
  },
  methods: {
    collapseing: function(a) { },
  },
  components:{
    h,
    m
  }
}
</script>
