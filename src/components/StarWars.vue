<template>
  <div>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["character"],

  data() {
    return {
      name: "test",
    };
  },

  created() {
    fetch(`https://swapi.dev/api/people/${this.character}/`)
      .then((response) => response.json())
      .then((data) => (this.name = data.name));
  },
};
</script>

<style scoped>
</style>