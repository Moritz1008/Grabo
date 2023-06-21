<template>
  <div>
    <a :href="'http://localhost:5000/' + url.shortUrl" target="_blank">http://localhost:5000/{{ url.shortUrl }}
    </a>
    <button>Copy link</button>
    <button>Add to Favorites</button>
    <p>{{ truncateUrl(url.originalUrl) }}</p>
  </div>
</template>
  
<script>
export default {
  props: ['url'],

  methods: {
    // limits the displayed length to 40, created with chatgpt
    truncateUrl(url) {
      return url.length > 40 ? url.substring(0, 40) + '...' : url;
    },
}
};
</script>

<style>
button {
  margin: 1rem;
}
p {
  color: gray;
}
</style>