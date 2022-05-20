import * as actions from "./ActionsTypes";

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case actions.REMOVE_MOVIE:
      const movies = state.movies;
      const deletedMovie = movies.filter((f) => f.id !== action.payload);
      return {
        ...state,
        movies: deletedMovie,
      };
    default:
      return state;
  }
};
