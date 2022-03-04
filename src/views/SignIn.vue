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
import axios from "axios"

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
    async onSubmit() {
      let response = await axios.post('v1/signin', this.form);

      console.log(response.data);
    }
  }
}
</script>
