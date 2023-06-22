<template>
  <div class="left">
    <Navbar></Navbar>
    <UrlForm @urlAdded="addUrl" id="urlform"></UrlForm>
  </div>
  <div class="right">
    <UrlList :urls="urls" class="logo"></UrlList>
  </div>
</template>

<script>
import axios from 'axios';
import UrlForm from './components/UrlForm.vue';
import UrlList from './components/UrlList.vue';
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      urls: [],
    };
  },
  components: {
    UrlForm,
    UrlList,
    Navbar,
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:5000/urls');
      this.urls = response.data;
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    addUrl(url) {
      this.urls.push(url);
    },
  },
};
</script>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.navbar {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#urlform {
  margin: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>'
