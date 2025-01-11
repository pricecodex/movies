import { Typography, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { movieStore } from "../stores/MovieStore";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

const HomePage = observer(() => {
  const handleInputChange = (e) => {
    const queryValue = e.target.value;
    movieStore.setQuery(queryValue);
  };

  return (
    <>
      <Typography variant='h4' component='h1' align='center'>
        Start typing to search for movies
      </Typography>

      <TextField
        label='Search for movies'
        variant='outlined'
        value={movieStore.query}
        onChange={handleInputChange}
        fullWidth
        sx={{ maxWidth: "600px", margin: "0 auto" }}
      />

      {movieStore.loading ? <Loader /> : <MovieList movies={movieStore.movies} />}
    </>
  );
});

export default HomePage;
