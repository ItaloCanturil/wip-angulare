<template>
  <div class="home bg-[#16161a] relative flex flex-col items-center min-h-screen justify-center">
    <Header @showListUser="show = true" :showForm="showForm" @close="showForm = false"/>
    <PostComponent :data="posts"/>
    <ListUserModal v-if="show" @close="show = false" @showUserForm="showForm = true, show= false"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostComponent from '@/components/PostsComponent.vue'
import ListUserModal from '@/components/Modal/ListUserModal.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    Header,
    PostComponent,
    ListUserModal
  },
  computed: {
    ...mapState({
      posts: state => state.posts.data
    })
  },
  data () {
    return {
      show: false,
      showForm: false
    }
  },
  async created () {
    await this.getAll()
    await this.getUser()
  },
  methods: {
    ...mapActions({
      getAll: 'posts/getAllPosts',
      getUser: 'users/getAllUser'
    })
  }
}
</script>
