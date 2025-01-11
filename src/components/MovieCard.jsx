import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getPoster } from "../utils";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      key={movie.title}
      style={{
        textDecoration: "none",
        color: "#1976d2",
        fontWeight: "bold",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.015)",
          },
        }}
      >
        <CardMedia
          component='img'
          alt={movie.title}
          height='450'
          image={getPoster(movie.poster_path)}
          sx={{ objectFit: "cover" }}
        />
        <CardContent
          sx={{
            textAlign: "center",
            backgroundColor: "#fff",
            padding: "16px",
            margin: "auto",
          }}
        >
          <Typography variant='h6' component='div' sx={{ marginBottom: "8px", fontWeight: "bold" }}>
            {movie.title}
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ marginBottom: "12px" }}>
            Released Date: {movie.release_date}
          </Typography>
          <Typography variant='body2' color='primary'>
            <Link
              to={`/movie/${movie.id}`}
              style={{
                textDecoration: "none",
                color: "#1976d2",
                fontWeight: "bold",
              }}
            >
              View Details
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
