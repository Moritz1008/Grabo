<template>
  <header class="wrapper">
    <h1>LinkShrink</h1>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/favorites" class="nav-link">Favorites</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
  </header>
</template>
  
<style scoped>
header {
  background-color: #333;
  padding: 1rem;
}

.wrapper {
  display: flex;
  align-items: center;              /* horizontal */
  justify-content: space-around;   /* vertical */
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}

nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}
</style>