<template>
  <div class="listContainer">
    <div v-for="url in reversedUrls" :key="url._id">
      <UrlItem :url="url" @favToggled="toggleFav" @delete="deleteItem" class="url-item"></UrlItem>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UrlItem from "./UrlItem.vue";

export default {

  data() {
    return {
      urls: [],
    };
  },
  components: {
    UrlItem,
  },
  async mounted() {
    try {
      const response = await axios.get('https://be.riedel1.duckdns.org/urls');
      this.urls = response.data;
    } catch (err) {
      console.error(err);
    }
  },

  methods: {
    addUrl(url) {
      this.urls.push(url);
    },

    async deleteItem(url) {
      try {
        await axios.delete(`https://be.riedel1.duckdns.org/urls/${url.shortUrl}`);
        console.log(`URL with shortUrl '${url.shortUrl}' was deleted`);

        this.urls = this.urls.filter(u => u.shortUrl !== url.shortUrl);       // The arrow function was created with ChatGPT
      } catch (err) {
        console.error(`Error deleting URL with shortUrl '${url.shortUrl}'`);
      }
    },

    toggleFav() {
      console.log("parent toggled fav");
    },
  },

  computed: {
    reversedUrls() {
      return [...this.urls].reverse();
    }
  },
};
</script>

<style scoped>
.url-item {
  background-color: #eeeeee;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.url-item:hover {
  transform: translateY(-5px);
}

.listContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
