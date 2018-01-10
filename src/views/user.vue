<template>
  <div class="hello">
    User: {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
