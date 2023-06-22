<template>
  <div>
    <div class="url-container">
      <a :href="'http://localhost:5000/' + url.shortUrl" target="_blank"
        >http://localhost:5000/{{ url.shortUrl }}
      </a>
      <button class="right-btn" @click="copyUrl">Copy link</button>
      <button class="right-btn">Add to Favorites</button>
    </div>
    <p>Original Link: [{{ truncateUrl(url.originalUrl) }}]</p>
  </div>
</template>

<script>
export default {
  props: ["url"],

  methods: {
    // limits the displayed length to 40, created with chatgpt
    truncateUrl(url) {
      return url.length > 40 ? url.substring(0, 40) + "..." : url;
    },

    copyUrl() {
      navigator.clipboard.writeText(
        "http://localhost:5000/" + this.url.shortUrl
      );
    },
  },
};
</script>

<style scoped>
button {
  margin: 1rem;
}

p {
  color: gray;
  display: inline;
}

.url-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.url-container .right-btn {
  margin-left: auto;
}
</style>
