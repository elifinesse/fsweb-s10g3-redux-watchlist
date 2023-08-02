import { movies } from "./../movies";
import {
  ADD_FAV,
  REMOVE_FAV,
  NEXT_MOV,
  PREV_MOV,
  GO_BEGINNING,
} from "../actions/actions";

const initialState = { movies: movies, favMovies: [], order: 0 };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        movies: state.movies.filter((mov) => action.payload.id !== mov.id),
        favMovies: [...state.favMovies, action.payload],
        order: state.order === 0 ? state.order : state.order - 1,
      };
    case REMOVE_FAV:
      const removed = state.favMovies.find((mov) => mov.id === action.payload);
      return {
        ...state,
        movies: [...state.movies, removed],
        favMovies: state.favMovies.filter((mov) => action.payload !== mov.id),
        order:
          state.order === state.movies.length - 1
            ? state.order
            : state.order - 1,
      };
    case NEXT_MOV:
      return {
        ...state,
        order: state.order + 1,
      };
    case PREV_MOV:
      return {
        ...state,
        order: state.order - 1,
      };
    case GO_BEGINNING:
      return {
        ...state,
        order: 0,
      };
    default:
      return state;
  }
}
