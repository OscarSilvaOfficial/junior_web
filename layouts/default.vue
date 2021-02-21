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