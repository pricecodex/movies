import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import MovieDetail from "./pages/MovieDetail";
import FavoriteMovies from "./pages/FavoriteMovies";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='movie/:id' element={<MovieDetail />} />
          <Route path='favorites' element={<FavoriteMovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
