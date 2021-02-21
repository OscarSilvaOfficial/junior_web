<template>
  <div>
    <Nav />
    <SubHeader />
    <Nuxt />
  </div>
</template>
<script>
import SubHeader from '~/components/header-components/SubHeader.vue'

export default {
  components:{
    SubHeader
  }
}
</script>
<style >
body {
  background-color: #262b35;
}
</style>