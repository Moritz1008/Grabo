<template>
    <div>
      <form @submit.prevent="submitUrl">
        <input v-model="url" placeholder="Enter URL" required />
        <button type="submit">Shorten</button>
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
        const response = await axios.post('http://localhost:5000/shorten', {
          originalUrl: this.url,
        });
        this.url = '';
        this.$emit('urlAdded', response.data);
      },
    },
  };
  </script>
  