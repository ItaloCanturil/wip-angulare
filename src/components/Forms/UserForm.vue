<template>
  <form
    class="w-[25rem] flex flex-col items-center bg-white p-2 relative rounded"
  >
    <div class="mb-6 w-full">
      <label class="block" for="username">Nome completo:</label>
      <input
        v-model="form.username"
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
        id="username"
        name="username"
        type="text"
      />
    </div>
    <div class="mb-6 w-full">
      <label class="block" for="username">ID do usuário:</label>
      <input
        v-model="form.id"
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
        id="id"
        name="id"
        type="text"
      />
    </div>
    <div class="mb-6 w-full">
      <label class="block" for="email">Email:</label>
      <input type="email"
        v-model="form.email"
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
        name="email"
        id="email"
        cols="30"
        rows="10"
        blur="validateEmail"
      />
      <span v-if="hasError.email.req" class="text-xs text-red-500">Email inválido</span>
    </div>
    <div class="mb-6 w-full">
      <label class="block" for="date">Data de nascimento:</label>
      <input
        v-model="form.date"
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
        id="date"
        name="date"
        type="text"
      />
    </div>
    <div class="mb-6 w-full">
      <label class="block" for="phone">Telofone:</label>
      <input
        v-model="form.phone"
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
        id="phone"
        name="phone"
        type="text"
      />
      <select name="gender" id="gender" v-model="form.gender">
        <option value="Masculino">Masculino</option>
        <option value="Feminina">Feminina</option>
      </select>
    </div>

    <div class="flex">
      <button @click.prevent="create(form)" class="bg-[#7f5af0] text-[#fffffe] p-1 rounded-lg mr-1">
        Adicionar
      </button>
      <button
        @click.prevent="$emit('close')"
        class="bg-[#2cb67d] text-[#fffffe] p-1 ml-1 rounded-lg"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'UserForm',
  props: {
    id: { type: Number }
  },
  data () {
    return {
      loading: false,
      hasError: {
        email: {
          req: false
        }
      },
      form: {
        username: null,
        email: null,
        phone: null,
        date: null,
        id: null,
        gender: null
      }
    }
  },
  computed: {
    ...mapState({
      users: state => state.users.data
    })
  },
  methods: {
    ...mapActions({
      create: 'users/create',
      edit: 'users/edit'
    }),

    async editUser (user) {
      try {
        this.loading = true
        user.id = this.id
        await this.edit(user)
        this.$emit('close')
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },

    validateEmail () {
      this.hasError.email.req = false
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!re.test(this.authLogin.email.toLowerCase())) {
        this.hasError.email.req = true
      }
    }
  }
}
</script>
