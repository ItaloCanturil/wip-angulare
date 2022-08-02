<template>
  <div class="home bg-[#16161a] relative flex flex-col items-center min-h-screen justify-center">
    <Header/>
    <PostComponent :data="posts"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostComponent from '@/components/PostsComponent.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    Header,
    PostComponent
  },
  computed: {
    ...mapState({
      posts: state => state.posts.data
    })
  },
  async created () {
    await this.getAll()
  },
  methods: {
    ...mapActions({
      getAll: 'posts/getAllPosts'
    })
  }
}
</script>
