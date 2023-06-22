<template>
  <div>
    <div class="url-container">
      <a :href="'http://localhost:5000/' + url.shortUrl" target="_blank">
        http://localhost:5000/{{ url.shortUrl }}
      </a>
      <button class="right-btn" @click="copyUrl">Copy link</button>
      <div v-if="showToast" class="toast-message">Link copied!</div>
      <button class="right-btn" @click="toggleFav">Add to Favorites</button>
    </div>
    <p>Original Link: [{{ truncateUrl(url.originalUrl) }}]</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showToast: false,
    };
  },
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
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    },
    toggleFav() {
      console.log("adding to favorites");
      this.$emit("favToggled");
    },
  },
};
</script>

<style scoped>
button {
  margin: 1rem;
  margin-bottom: 2rem;
  background-color: #666;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 1);
  transform: scale(1.1, 1.1);
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

.toast-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 999;
}
</style>
