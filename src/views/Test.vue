<template>
    <h1>Hello</h1>
    <div v-for="test in allTest" :key="test.id" class="">
        {{test.id}}
        {{ test.name }}
    </div>
</template>
<script>
import { mapGetters, mapActions  } from "vuex"

export default {
    name: 'Test',
    methods: {
    ...mapActions({
        mainFetch: "main/fetchTest"
        })
    },
    computed: mapGetters({
        allTest: 'main/allTest'
        }),
    created() {
        this.mainFetch();
    },
}
</script>