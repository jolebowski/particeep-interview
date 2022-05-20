import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../redux/Actions';
import { MovieCard } from "./MovieCard";
import { movies$ } from "../data/movies";

export const Movies = () => {
	const { movies } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

  const fetchMovies = async () => {
			const data = await movies$;
			dispatch(fetchMoviesAction(data));
	};

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 text-center">Films</h1>
      <div className="row">{movies && movies.map((movie) => <MovieCard movie={movie} />)}</div>
    </div>
  );
};
