<template>
  <main class="main">
    <section v-for="post in posts" :key="post.id">
      <Post id="post" :post="post"/>
    </section>
  </main>
</template>
<script>
import Post from "~/components/main-components/Post.vue";
import { getPosts } from "~/routes/post";

export default {
  components: {
    Post
  },

  async mounted() {
    this.posts = await getPosts()
      .then(res => res.data)
  },

  data() {
    return {
      posts: "",
    };
  },

};
</script>
<style scoped>
.main {
  margin-top: 2rem;
}

#post {
  margin-bottom: 1rem;
  background-color: #161b22;
}
</style>
