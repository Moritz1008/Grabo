<template>
  <div>
    <a :href="'http://localhost:5000/' + url.shortUrl" target="_blank">http://localhost:5000/{{ url.shortUrl }}
      <p>{{ url.originalUrl }}</p>
    </a>
    <button>Add to Favorites</button>
  </div>
</template>
  
<script>
export default {
  props: ['url'],
};
</script>

<style>
button {
  margin: 1rem;
}
</style>