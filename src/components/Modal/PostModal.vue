<template>
  <div
    class="
      fixed
      w-screen
      h-screen
      flex
      justify-center
      items-center
      bg-gray-700 bg-opacity-70
      top-0
      left-0
    "
  >
    <post-form :method="method" :id="id" @close="$emit('close')"/>
  </div>
</template>

<script>
import PostForm from '@/components/Forms/PostsForm.vue'
export default {
  name: 'PostModal',
  components: {
    PostForm
  },
  props: {
    method: { type: String, required: true },
    id: { type: Number }
  }
}
</script>
