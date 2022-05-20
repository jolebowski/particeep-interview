import * as actions from "./ActionsTypes";

export const fetchMoviesAction = (movies) => {
  return {
    type: actions.FETCH_MOVIES,
    payload: movies,
  };
};
