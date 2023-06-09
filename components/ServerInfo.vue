<template>
    <div class="w-64 h-12 bg-black pt-3">
        <h2 class="text-lg text-left ml-4">{{ name }}</h2>
    </div>
</template>

<script setup lang="ts">
const { name } = defineProps(['name'])
</script>

<style scoped>

</style>