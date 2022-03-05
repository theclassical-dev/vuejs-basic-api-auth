<template>
   <ul>
       <li>
           <router-link to="/">Home</router-link>
       </li>
       <template v-if="authenticated">
            <li>
                {{ user.name }} {{ user.email }}
            </li>
            <li>
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="signOut">Sign Out</a>
            </li>
       </template>
       <template v-else>
            <li>
                <router-link to="/signin">Sign In</router-link>
            </li>
       </template>
   </ul>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
       computed: {
           ...mapGetters({
               authenticated: 'auth/authenticated',
               user: 'auth/user'
           }),
       },

       methods: {
           ...mapActions({
               signOutAction: 'auth/signOut'
           }),

            signOut() {
                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: 'Home'
                    })
                })
            }

       }
    }
</script>