<template>
  <div class="header w-full fixed top-0 bg-white flex justify-between px-3 h-14 items-center">
    <h1>Wip Angulare</h1>

    <div class="btn-wrapper">
      <button class="bg-[#7f5af0] text-[#fffffe] py-1 px-2 rounded-lg mr-1" @click="$emit('showListUser')">
      Mostrar usuários
      </button>
      <button class="bg-[#7f5af0] text-[#fffffe] py-1 px-2 rounded-lg ml-1" @click="show = true">
        Adicionar usuário
      </button>
    </div>

    <user-modal v-if="show || showForm" @close="$emit('close'), show = false"/>
  </div>
</template>

<script>
import UserModal from '@/components/Modal/UserModal.vue'
export default {
  name: 'HeaderComponent',
  props: {
    showForm: { type: Boolean }
  },
  components: {
    UserModal
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
