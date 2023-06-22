import UrlForm from './components/UrlForm.vue';
import UrlList from './components/UrlList.vue';
// import Favorites from './components/Favorites.vue';

const routes = [
  { path: '/', component: UrlForm },
  { path: '/recents', component: UrlList },
//   { path: '/favorites', component: Favorites }
];

export default routes;