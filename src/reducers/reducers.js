import { movies } from "./../movies";
import { ADD_FAV, REMOVE_FAV } from "../actions/actions";

const initialState = { movies: movies, favMovies: [] };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        movies: state.movies.filter((mov) => action.payload.id !== mov.id),
        favMovies: [...state.favMovies, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        movies: [...state.movies, action.payload],
        favMovies: state.favMovies.filter(
          (mov) => action.payload.id !== mov.id
        ),
      };
    default:
      return state;
  }
}