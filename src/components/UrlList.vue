<template>
  <div>
    <div v-for="url in reversedUrls" :key="url._id">
      <UrlItem :url="url" @favToggled="toggleFav" class="url-item"></UrlItem>
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
  methods: {
    toggleFav() {
      console.log("parent toggled fav")
    }
  },
  computed: {
    reversedUrls() {
      return [...this.urls].reverse();  // creates a new Array
    }
  }
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