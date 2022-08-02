<template>
  <div class="header w-full fixed top-0 bg-white flex justify-between px-3 h-14 items-center">
    <h1>Wip Angulare</h1>

    <button class="bg-[#7f5af0] text-[#fffffe] py-1 px-2 rounded-lg" @click="$emit('showUser')">
      Adicionar usuário
    </button>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'

}
</script>
