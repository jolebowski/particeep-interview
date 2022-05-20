// import { movies$ } from "../../data/movies";
import { MovieCard } from "./MovieCard";

export const Movies = () => {
  return (
    <div className="container">
      <h1 className="mt-4 mb-4 text-center">Films</h1>
      <div className="row">
        <MovieCard />
      </div>
    </div>
  );
};
