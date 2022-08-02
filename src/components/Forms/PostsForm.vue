<template>
  <form
    class="w-[25rem] flex flex-col items-center bg-white p-2 relative rounded"
  >
    <div class="mb-6 w-full">
      <label class="block" for="title">Titulo:</label>
      <input
        v-model="form.title"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        id="title"
        name="title"
        type="text"
      />
    </div>
    <div class="mb-6 w-full">
      <label class="block" for="body">Descrição:</label>
      <textarea
        v-model="form.body"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        name="body"
        id="body"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="mb-6 w-full">
      <label class="block" for="userId">Id do usuário:</label>
      <input
        v-model="form.userId"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        id="userId"
        name="userId"
        type="text"
      />
    </div>

    <div class="flex">
      <button v-if="method === 'criar'" @click.prevent="createPost(form)" class="bg-[#7f5af0] text-[#fffffe] p-1 rounded-lg mr-1">
        Adicionar
      </button>
      <button v-if="method === 'editar'" @click.prevent="editPost(form)" class="bg-[#7f5af0] text-[#fffffe] p-1 rounded-lg mr-1">
        Editar
      </button>
      <button
        @click="$emit('close')"
        class="bg-[#2cb67d] text-[#fffffe] p-1 ml-1 rounded-lg"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PostsForm',
  props: {
    method: { type: String, required: true },
    id: { type: Number }
  },
  data () {
    return {
      loading: false,
      form: {
        title: null,
        body: null,
        userId: null,
        id: null
      }
    }
  },
  methods: {
    ...mapActions({
      create: 'posts/create',
      edit: 'posts/edit'
    }),

    async createPost (post) {
      try {
        this.loading = true
        await this.create(JSON.stringify(post))
        this.$emit('close')
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },

    async editPost (post) {
      try {
        this.loading = true
        post.id = this.id
        await this.edit(post)
        this.$emit('close')
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
