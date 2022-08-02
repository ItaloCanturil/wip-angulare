<template>
  <div class="posts w-[26rem] max-h-[30rem] overflow-auto rounded">
    <div class="posts__header p-2 bg-white flex justify-between items-center">
      <h2>Posts</h2>
      <button class="bg-[#7f5af0] text-[#fffffe] p-1 rounded-lg" @click="show = true, method = 'criar'">
        Adicionar novo post
      </button>
    </div>
    <section class="posts__section">
      <article class="section__post text-[#94a1b2] px-1 my-2" v-for="post in data" :key="post.id">
        <div class="flex justify-between mb-1 text-[#fffffe]">
          <h3 class="text-lg">{{ post.title }}</h3>
          <span class="ml-2">{{ post.userId }}</span>
        </div>
        <p>{{ post.body }}</p>

      <div class="flex">
        <button @click="show = true, method = 'editar', postId = post.id" class="bg-[#7f5af0] text-[#fffffe] p-1 rounded-lg mr-1">
          Editar
        </button>
        <button
          @click="deleteOne(post.userId)"
          class="bg-[#2cb67d] text-[#fffffe] p-1 ml-1 rounded-lg"
        >
          Deletar
        </button>
      </div>
      </article>
    </section>
    <PostModal :method="method" :id="postId" v-if="show" @close="show = false"/>
  </div>
</template>

<script>
import PostModal from '@/components/Modal/PostModal.vue'
import { mapActions } from 'vuex'
export default {
  name: 'PostComponent',
  props: {
    data: { type: Array, required: true }
  },
  components: {
    PostModal
  },
  data () {
    return {
      show: false,
      method: 'criar',
      postId: null
    }
  },
  methods: {
    ...mapActions({
      deletePost: 'posts/delete'
    }),

    async deleteOne (id) {
      try {
        this.loading = true
        await this.deletePost(id)
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
