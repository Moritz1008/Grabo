<template>
  <div class="left">
    <Navbar class="navbar"></Navbar>
    <UrlForm @urlAdded="pushUrl" id="urlform"></UrlForm>
    <RouterView></RouterView>
  </div>
  <div class="right">
    <UrlList ref="urlList"></UrlList>
  </div>
</template>

<script>
import UrlForm from './components/UrlForm.vue';
import UrlList from './components/UrlList.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    UrlForm,
    UrlList,
    Navbar,
  },
  methods: {
    pushUrl(url) {
      this.$refs.urlList.addUrl(url);
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

#urlform {
  margin: 2rem;
}
</style>'
