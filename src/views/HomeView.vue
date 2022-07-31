<template>
  <div class="home">
    <Header/>
    <PostComponent/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostComponent from '@/components/PostsComponent.vue'
export default {
  name: 'HomeView',
  components: {
    Header,
    PostComponent
  }
}
</script>
