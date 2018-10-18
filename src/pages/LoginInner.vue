<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/components/Header"

  export default {
    name: 'LoginInner',
    components: {
      Header
    },
    props: {},
    data() {
      return {
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {
    }
  }
</script>

<style>
  #app {}
</style>