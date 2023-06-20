<template>
    <header>
      <div class="wrapper">
        <h1 class="logo">URL Shortener</h1>
        <nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/recents" class="nav-link">Recents</router-link>
          <router-link to="/favorites" class="nav-link">Favorites</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
    header {
      background-color: #333;
      padding: 1rem;
    }
  
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .logo {
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
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      transition: background-color 0.3s ease;
    }
  
    .nav-link:hover {
      background-color: #555;
    }
  </style>