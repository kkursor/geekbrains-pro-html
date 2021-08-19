<template>
  <div class="main_menu_left_buttons">
    <a href="index.html"><img src="img/logo.svg" alt="logo"></a>
    <a href="#"><img src="img/search.svg" alt="search"></a>
    <input
        type="text"
        name="searchField"
        v-model="searchString"
        @change="emitSearch"
    >
  </div>
</template>

<script>
export default {
  name: "cd-search",
  data() {
    return {
      searchString: ""
    }
  },
  mounted() {

  },
  methods: {
    emitSearch() {
      console.log('emitSearch', this.searchString);
      this.$emit('search-changed', this.searchString);
    }
  }
}
</script>

<style scoped>

</style>