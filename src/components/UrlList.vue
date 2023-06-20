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
  