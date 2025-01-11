import { makeAutoObservable } from "mobx";
import { api } from "../api/index";

class MovieStore {
  query = "";
  movies = [];
  currentMovie = null;
  currentMovieTrailerId = null;
  loading = false;
  debounceTimer = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies = async () => {
    if (!this.query.trim()) return;

    this.loading = true;
    try {
      const response = await api.get(`/search/movie?query=${this.query}`);
      this.movies = response.data.results || [];
    } catch (error) {
      console.error("Error fetching movies:", error);
      this.movies = [];
    } finally {
      this.loading = false;
    }
  };

  fetchMovie = async (id) => {
    this.loading = true;
    try {
      const response = await api.get(`/movie/${id}`);
      this.currentMovie = response.data;
    } catch (error) {
      console.error("Error fetching movie:", error);
    } finally {
      this.loading = false;
    }
  };

  fetchMovieTrailerId = async (id) => {
    try {
      const response = await api.get(`/movie/${id}/videos`);
      const trailer = response.data.results.find((video) => video.type === "Trailer");
      this.currentMovieTrailerId = trailer ? trailer.key : null;
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  setQuery(query) {
    this.query = query;
    // Debounce for optimization
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => this.fetchMovies(), 500);
  }
}

export const movieStore = new MovieStore();
