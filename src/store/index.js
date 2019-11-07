import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    favorites: [],
    favoritesKeys: [],
  },

  getters: {
    movies(state) {
      return state.movies;
    },

    favorites(state) {
      return state.favorites;
    },

    favoritesKeys(state) {
      return state.favoritesKeys;
    },
  },

  mutations: {
    setMovie(state, { movie }) {
      let movies = [...state.movies];
      movies.push(movie);

      state.movies = movies.sort((a, b) => {
        return b.imdbRating - a.imdbRating;
      });
    },

    reverseMovies(state) {
      state.movies = state.movies.reverse();
    },

    addToFavorites(state, { id, callback }) {
      state.favoritesKeys.push(id);
      state.favorites.push(state.movies.find(({ imdbID }) => imdbID === id));

      callback();
    },

    removeFromFavorites(state, { id, callback }) {
      const favoritesKeysIndex = state.favoritesKeys.findIndex(key => key === id);
      state.favoritesKeys.splice(favoritesKeysIndex, 1);

      const favoritesIndex = state.favorites.findIndex(({ imdbID }) => imdbID === id);
      state.favorites.splice(favoritesIndex, 1);

      callback();
    },
  },

  actions: {
    movieLoaded(store, payload) {
      store.commit('setMovie', payload);
    },

    reverseMovies(store) {
      store.commit('reverseMovies');
    },

    addToFavorites(store, payload) {
      store.commit('addToFavorites', payload);
    },

    removeFromFavorites(store, payload) {
      store.commit('removeFromFavorites', payload);
    },
  },
})
