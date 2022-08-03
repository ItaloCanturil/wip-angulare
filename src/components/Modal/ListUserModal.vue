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
    <div class="flex flex-col" v-if="users.length > 0">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    ID
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Nome
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Email
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Data de nascimento
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Telefone
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Genêro
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="user" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ user.id }}</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ user.username }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ user.email }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ user.date }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ user.phone }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ user.gender }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button
                      @click="deleteUser(index)"
                      class="bg-[#2cb67d] text-[#fffffe] p-1 ml-1 rounded-lg"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button
          @click="$emit('close')"
          class="bg-[#7f5af0] text-[#fffffe] p-1 ml-1 rounded-lg"
        >
          Fechar
        </button>
    </div>
    <div v-else class="w-[25rem] flex flex-col items-center bg-white p-2 relative rounded">
      <p>Nenhum usuário encontrado :(</p>

      <div class="flex mt-5">
        <button class="bg-[#7f5af0] text-[#fffffe] py-1 px-2 rounded-lg" @click="$emit('showUserForm')">
          Adicionar usuário
        </button>
        <button
          @click="$emit('close')"
          class="bg-[#2cb67d] text-[#fffffe] p-1 ml-1 rounded-lg"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ListUserModal',
  computed: {
    ...mapState({
      users: state => state.users.data
    })
  },
  methods: {
    ...mapActions({
      deleteUser: 'users/delete'
    })
  }
}
</script>
