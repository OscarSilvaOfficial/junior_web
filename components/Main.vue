<template>
  <main class="main">
    <Post />
  </main>
</template>
<script>
import Post from '~/components/main-components/Post.vue'

export default {
  components: {    
    Post
  }
}
</script>
<style scoped>
.main {
  margin-top: 2rem
}
</style>