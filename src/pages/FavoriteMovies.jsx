import { Typography } from "@mui/material";
import { observer } from "mobx-react";
import { favoriteMoviesStore } from "../stores/FavoriteMoviesStore";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

const FavoriteMovies = observer(() => {
  return (
    <div>
      <Typography variant='h4' component='h1' align='center' sx={{ marginBottom: "2rem" }}>
        Favorite Movies
      </Typography>

      {!favoriteMoviesStore.favoriteMovies ? <Loader /> : <MovieList movies={favoriteMoviesStore.favoriteMovies} />}
    </div>
  );
});

export default FavoriteMovies;
