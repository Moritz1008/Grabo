<template>
  <div>
    <h2>Cookie Generator</h2>
    <div class="form">
      <label for="cookie-name">Cookie Name:</label>
      <input type="text" id="cookie-name" v-model="name" />

      <label for="cookie-value">Cookie Value:</label>
      <input type="text" id="cookie-value" v-model="value" />

      <button @click="createCookie">Create Cookie</button>
    </div>
    <div v-if="cookieCreated">
      <p>Cookie created:</p>
      <p><strong>Name:</strong> {{ cookieName }}</p>
      <p><strong>Value:</strong> {{ cookieValue }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      name: '',
      value: '',
      cookieCreated: false,
      cookieName: '',
      cookieValue: ''
    };
  },
  methods: {
    createCookie() {
      document.cookie = `${this.name}=${this.value}`;
      this.cookieCreated = true;
      this.cookieName = this.name;
      this.cookieValue = this.value;
    }
  }
};
</script>
  
<style>
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
}
</style>