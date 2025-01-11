import { makeAutoObservable } from "mobx";

class FavoriteMoviesStore {
  favoriteMovies = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFavorites();
  }

  loadFavorites() {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    if (storedFavorites) {
      this.favoriteMovies = JSON.parse(storedFavorites);
    }
  }

  saveFavorites() {
    localStorage.setItem("favoriteMovies", JSON.stringify(this.favoriteMovies));
  }

  toggleFavorite(movie) {
    if (this.isFavorite(movie)) {
      this.favoriteMovies = this.favoriteMovies.filter((m) => m.id !== movie.id);
    } else {
      this.favoriteMovies.push(movie);
    }
    this.saveFavorites();
  }

  isFavorite(movie) {
    return this.favoriteMovies.some((m) => m.id === movie.id);
  }
}

export const favoriteMoviesStore = new FavoriteMoviesStore();
