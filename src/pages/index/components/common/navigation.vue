<style>
.layout-con{
  height: 100%;
  width: 100%;
}
.menu-item-hide-span span {
  display:none;
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
</style>
<template>
  <Menu :active-name="activeMenu" :open-names="['1']"  theme="dark" width="auto" class="menu-item">
    <Submenu name="1">
      <template slot="title">
        <Tooltip content="导航1" placement="right" theme="light" offset="[10,35]">
        <Icon type="ios-navigate" :size="28"></Icon>
        </Tooltip>
        <span>导航1</span>
      </template>
      <MenuItem name="1-1" style="padding-left:29px" to="/">
        <Tooltip content="导航1-1" placement="right" theme="light" offset="[10,35]">
          <Icon type="ios-code" :size="15"/>
        </Tooltip>
        <span>导航1-1</span>
      </MenuItem>
      <MenuItem name="1-2" style="padding-left:29px"  to="/about">
        <Tooltip content="导航1-2" placement="right" theme="light" offset="[10,35]">
          <Icon type="md-git-network" :size="15"></Icon>
        </Tooltip>
        <span>导航1-2</span>
      </MenuItem>
    </Submenu>
    <MenuItem name="2" to="/running">
      <Tooltip content="导航2-1" placement="right" theme="light" offset="[10,35]">
        <Icon type="ios-bug" :size="28"/>
      </Tooltip>
      <span>导航2-1</span>
    </MenuItem>
  </Menu>
</template>
<script>
export default {
  name: 'app',
  data () {
    return { }
  },
  computed: {
    //属性监听,通过计算设置属性
    //param: function() {return }

    /**
     *
     * 根据url选择选中的按钮
     */
    activeMenu: function() {

      let selectMenu = "";

      if ( /^#\/about$/.test(location.hash) ) {
        selectMenu = "1-2"
      } else if ( /^#\/$/.test(location.hash) ) {
        selectMenu = "1-1"
      } else if ( /^#\/running$/.test(location.hash) ) {
        selectMenu = "2"
      }

      return selectMenu;
    }
  },
}
</script>
