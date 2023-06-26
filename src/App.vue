<template>
  <div class="left">
    <Navbar class="navbar"></Navbar>
    <UrlForm @urlAdded="addUrl" id="urlform"></UrlForm>
    <RouterView></RouterView>
  </div>
  <div class="right">
    <UrlList :urls="urls"></UrlList>
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
  },
};
</script>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.navbar {
  border-radius: 8px;
  width: 100%;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

/* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-radius: 0px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

#urlform {
  margin: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>'
