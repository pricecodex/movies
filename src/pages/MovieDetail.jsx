import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Button, Typography, Box, CardMedia, Divider } from "@mui/material";
import { movieStore } from "../stores/MovieStore";
import { favoriteMoviesStore } from "../stores/FavoriteMoviesStore";
import { getPoster, formatNumber } from "../utils";
import Loader from "../components/Loader";

const MovieDetail = observer(() => {
  const { id } = useParams();

  useLayoutEffect(() => {
    if (id) {
      movieStore.fetchMovie(id);
      movieStore.fetchMovieTrailerId(id);
    }
  }, [id]);

  if (movieStore.loading) return <Loader />;
  if (!movieStore.currentMovie) return null;

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {/* Poster */}
        <CardMedia
          component='img'
          alt={movieStore.currentMovie.title}
          image={getPoster(movieStore.currentMovie.poster_path)}
          sx={{
            width: "100%",
            maxWidth: 300,
            borderRadius: 2,
            boxShadow: 4,
            marginBottom: { xs: 3, md: 0 },
          }}
        />

        {/* Movie Info */}
        <Box sx={{ flex: 1 }}>
          <Typography variant='h4' component='h1' sx={{ fontWeight: "bold" }}>
            {movieStore.currentMovie.original_title}
          </Typography>
          <Typography variant='h6' color='textSecondary' sx={{ marginBottom: 2 }}>
            {movieStore.currentMovie.release_date} |{" "}
            {movieStore.currentMovie.genres.map((genre) => genre.name).join(", ")}
          </Typography>

          {/* Movie Details */}
          <Box sx={{ marginBottom: 3 }}>
            {movieStore.currentMovie.original_language && (
              <Typography variant='body1'>
                <strong>Language:</strong> {movieStore.currentMovie.original_language.toUpperCase()}
              </Typography>
            )}
            {movieStore.currentMovie.Country && (
              <Typography variant='body1'>
                <strong>Country:</strong> {movieStore.currentMovie.Country}
              </Typography>
            )}
            {movieStore.currentMovie.budget && (
              <Typography variant='body1'>
                <strong>Budget:</strong> ${formatNumber(movieStore.currentMovie.budget)}
              </Typography>
            )}
            {movieStore.currentMovie.revenue && (
              <Typography variant='body1'>
                <strong>Box Office:</strong> ${formatNumber(movieStore.currentMovie.revenue)}
              </Typography>
            )}
            {movieStore.currentMovie.vote_average && (
              <Typography variant='body1'>
                <strong>Rating:</strong> {movieStore.currentMovie.vote_average}
              </Typography>
            )}
          </Box>

          {/* Plot */}
          <Typography variant='body1' sx={{ marginBottom: 3 }}>
            <strong>Plot:</strong> {movieStore.currentMovie.overview}
          </Typography>

          {/* Favorite Button */}
          <Button
            variant='contained'
            color={favoriteMoviesStore.isFavorite(movieStore.currentMovie) ? "secondary" : "primary"}
            onClick={() => favoriteMoviesStore.toggleFavorite(movieStore.currentMovie)}
            sx={{
              alignSelf: "flex-start",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            {favoriteMoviesStore.isFavorite(movieStore.currentMovie) ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        </Box>
      </Box>

      <Divider sx={{ marginY: 1 }} />

      {/* Trailer Section */}
      {movieStore.currentMovieTrailerId && (
        <iframe
          src={`https://www.youtube.com/embed/${movieStore.currentMovieTrailerId}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          style={{
            aspectRatio: "16/9",
            width: "100%",
            border: "none",
          }}
        ></iframe>
      )}
    </Box>
  );
});

export default MovieDetail;
