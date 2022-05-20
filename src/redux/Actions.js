import * as actions from "./ActionsTypes";

export const fetchMoviesAction = (movies) => {
  return {
    type: actions.FETCH_MOVIES,
    payload: movies,
  };
};

export const RemoveMovieAction = (id) => {
  return {
    type: actions.REMOVE_MOVIE,
    payload: id,
  };
};
