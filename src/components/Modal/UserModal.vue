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
    <user-form :method="method" :id="id" @close="$emit('close')"/>
  </div>
</template>

<script>
import UserForm from '@/components/Forms/UserForm.vue'
export default {
  name: 'UserModal',
  components: {
    UserForm
  },
  props: {
    method: { type: String, required: true },
    id: { type: Number }
  }
}
</script>
