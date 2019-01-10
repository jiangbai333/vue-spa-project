<style>

</style>
<template>
    <div>
        <ul>
            <li v-for="(nav,index) in navs" @click="test(nav,index)">{{nav.li}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'list',
    data () {
        return { }
    },
    props: ['navs'],
    computed: {
        //属性监听,通过计算设置属性
        //param: function() {return } 
    },
    methods: {
        test: function(nav, index) {
            this.$emit('sentLi', index);
            /*nav.li = nav.li + '已点击'*/
        }
    },
}
</script>

