import { TextField } from "@mui/material";
import { movieStore } from "../stores/MovieStore";

const SearchBar = () => {
  return (
    <TextField
      label='Search Movies'
      variant='outlined'
      fullWidth
      value={movieStore.query}
      onChange={(e) => movieStore.setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
