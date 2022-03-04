<template>
  <div id="nav">
      <Nav />
    <!-- <router-link to="/">Home</router-link> | -->
  </div>
  <router-view/>
</template>

<script>
import Nav from '@/components/Nav'
  export default {
      components: {
        Nav
      }
  }
</script>