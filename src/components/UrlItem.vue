<template>
  <div>
    <a :href="'http://localhost:5000/' + url.shortUrl" target="_blank">{{ url.shortUrl }}</a>
  </div>
</template>
  
<script>
export default {
  props: ['url'],
};
</script>

<style>
a {
  padding: 1rem;
}
</style>