<template>
  <form @submit.prevent="onSubmit">
    <div class="">
      <label>email</label>
      <input type="text" name="email" id="email" v-model="form.email">
    </div>
     <div class="">
      <label>password</label>
      <input type="password" name="password" id="password" v-model="form.password">
    </div>
    <div class="">
      <button type="submit">Sign In</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignIn',
  components: {
  
  },

  data(){
    return {
      form: {
        email:'',
        password:'',
      }
    }
  },

  methods: {
    ...mapActions({
      SignIn: 'auth/SignIn'
    }),
    onSubmit() {
      this.SignIn(this.form).then(() => {
        this.$router.replace({
          name: 'dashboard'
        })
      })
    }
  }
}
</script>
