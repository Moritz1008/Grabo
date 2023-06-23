<template>
  <div>
    <form @submit.prevent="submitUrl" class="input-container">
      <input class="input-field" v-model="url" placeholder="Enter URL" required />
      <button class="submit-button" type="submit">Shorten</button>
    </form>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      url: '',
    };
  },
  methods: {
    async submitUrl() {
      const response = await axios.post('https://be.riedel1.duckdns.org/shorten', {
      // const response = await axios.post('http://localhost:5000/shorten', {
        originalUrl: this.url,
      });
      this.url = '';
      this.$emit('urlAdded', response.data);
    },
  },
};
</script>
  
<style>
.input-container {
  display: flex;
  gap: 1rem;
}

.input-field {
  width: 300px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #666;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: hsla(160, 100%, 37%, 1);
  /* background-color: #0056b3; */
  transform: scale(1.1,1.1);
}
</style>
  