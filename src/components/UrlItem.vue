<template>
  <div>
    <div class="url-container">
      <a :href="'https://be.riedel1.duckdns.org/' + url.shortUrl" target="_blank">
      <!-- <a :href="'http://localhost:5000/' + url.shortUrl" target="_blank"> -->
        https://be.riedel1.duckdns.org/{{ url.shortUrl }}
      </a>
      <button class="right-btn" @click="copyUrl">Copy link</button>
      <button class="right-btn" @click="toggleFav">Add to Favorites</button>
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
        "https://be.riedel1.duckdns.org/" + this.url.shortUrl
      );
    },
    toggleFav() {
      console.log("adding to favorites");
      this.$emit("favToggled");
    },
  }
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

.right-btn {
  margin-left: auto;
}
</style>
