<template>
    <div>
        {{ msg }}
        <l :navs="navs" @sentLi="setLi"></l>
        <div>{{ litext }}</div>
    </div>
</template>
<script>
import l from '../components/tool/list.vue';

export default {
    name: 'app',
    data () {
        return {
            litext: "",
            msg: "首页",
            navs: [
                {li: "li1"},
                {li: "li2"},
                {li: "li3"},
                {li: "li4"},
            ]
        }
    },
    methods: {
        setLi: function(index) {
            this.litext = this.navs[index].li
            this.navs[index].li = "已点击"
        }
    },
    components: {
        l
    }
}
</script>
