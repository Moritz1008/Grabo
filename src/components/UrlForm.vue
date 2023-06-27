<template>
  <div>
    <form @submit.prevent="submitUrl" class="input-container">
      <input class="input-field" v-model="url" placeholder="Enter URL" required />
      <button class="submit-button" type="submit">Shorten</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      url: '',
      errorMessage: '',
    };
  },
  methods: {
    isValidUrl(string) {
      try {
        new URL(string);
      } catch (_) {
        return false;  
      }
      return true;
    },
    async submitUrl() {
      if (this.isValidUrl(this.url)) {
        try {
          const response = await axios.post('https://be.riedel1.duckdns.org/shorten', {
            originalUrl: this.url,
          });
          this.url = '';
          this.errorMessage = '';
          this.$emit('urlAdded', response.data);
        } catch (error) {
          this.errorMessage = "Something went wrong. Please try again.";
        }
      } else {
        this.errorMessage = 'Please enter a valid URL';
      }
    }
  }
};
</script>
  
<style>
.input-container {
  display: flex;
  justify-content: center;
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
  transform: scale(1.1, 1.1);
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>
  