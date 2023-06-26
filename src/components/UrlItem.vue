<template>
  <div>
    <div class="url-container">
      <a :href="'https://be.riedel1.duckdns.org/' + url.shortUrl" target="_blank">
        https://be.riedel1.duckdns.org/{{ url.shortUrl }}
      </a>
      <div class="btn-container">
        <button class="copyButton" @click="copyUrl">
          <font-awesome-icon icon="copy" />
        </button>
        <div v-if="showCopyToast" class="toast-message">Link copied!</div>
        <button class="favButton" @click="triggerFav">
          <font-awesome-icon icon="star" />
        </button>
        <div v-if="showFavToast" class="toast-message">Coming soon...</div>
        <button class="delButton" @click="triggerDelete">
          <font-awesome-icon icon="trash" />
        </button>
      </div>
    </div>
    <p>Original Link: [{{ truncateUrl(url.originalUrl) }}]</p>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCopy, faStar, faTrash);

export default {
  data() {
    return {
      showCopyToast: false,
      showFavToast: false,
    };
  },
  props: ["url"],
  components: {
    FontAwesomeIcon,
  },
  methods: {
    // limits the displayed length to 40, created with chatgpt
    truncateUrl(url) {
      return url.length > 40 ? url.substring(0, 40) + "..." : url;
    },
    copyUrl() {
      navigator.clipboard.writeText(
        "https://be.riedel1.duckdns.org/" + this.url.shortUrl
      );
      this.showCopyToast = true;
      setTimeout(() => {
        this.showCopyToast = false;
      }, 1000);
    },
    triggerFav() {
      console.log("adding to favorites");
      this.$emit("favToggled");
      this.showFavToast = true;
      setTimeout(() => {
        this.showFavToast = false;
      }, 1000);
    },
    triggerDelete() {
      console.log("deleting");
      this.$emit("delete", this.url);
    }
  },
};
</script>

<style scoped>
button {
  margin-left: 1rem;
  background-color: #666;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.copyButton:hover {
  background-color: hsla(160, 100%, 37%, 1);
  transform: scale(1.1, 1.1);
}

.favButton:hover {
  background-color: rgb(244, 208, 63);
  transform: scale(1.1, 1.1);
}

.delButton:hover {
  background-color: rgb(184, 50, 50);
  transform: scale(1.1, 1.1);
}

p {
  color: gray;
  display: inline;
}

.url-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.btn-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 2rem;
}

.toast-message {
  position: fixed;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 999;
}
</style>
