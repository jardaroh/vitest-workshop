<script lang="ts" setup>

</script>

<template>
  <div>
    <button>-</button>
    <span>0</span>
    <button>+</button>
  </div>
</template>

<style scoped>
div {
  display: inline-grid;
  gap: .5rem;
  grid-template-columns: repeat(3, max-content);
  padding: .5rem 1rem;
  border-radius: 100px;
  background-color: #eee;
  color: #1a1a1a;
}
</style>
