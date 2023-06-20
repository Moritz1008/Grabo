<template>
    <div>
      <div v-for="url in urls" :key="url._id">
        <url-item :url="url"></url-item>
      </div>
    </div>
  </template>
  
  <script>
  import UrlItem from './UrlItem.vue';
  
  export default {
    props: ['urls'],
    components: {
      UrlItem,
    },
  };
  </script>
  
  <style>
.url-item {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.url-item:hover {
  transform: translateY(-5px);
}
</style>