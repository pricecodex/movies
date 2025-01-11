import { Box } from "@mui/material";
import { observer } from "mobx-react";
import MovieCard from "./MovieCard";
import { Typography } from "@mui/material";

const MovieList = observer(({ movies }) => {
  if (movies.length === 0) {
    return (
      <Typography variant='h6' align='center' sx={{ mt: 2 }}>
        No movies found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </Box>
  );
});

export default MovieList;
