<template>
  <div>
    Dashboard
  </div>
  <div v-for="test in allTest" :key="test.id" class="">
    {{ test.name }}
    {{ test.date}}
  </div>
</template>

<script>
import { mapGetters, mapActions  } from "vuex"
export default {
  name: 'Dashboard',
  methods: {
    ...mapActions(["fetchTest"])
  },
  computed: mapGetters(["allTest"]),
  created() {
    this.fetchTest();
  },
  components: {
  //
  }
}
</script>
