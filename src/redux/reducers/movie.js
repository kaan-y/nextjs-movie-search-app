import {
  MOVIE_DETAIL_LOAD,
  MOVIE_DETAIL_LOAD_SUCCESS,
  MOVIE_DETAIL_LOAD_FAIL,
} from '@/redux/actions/movie'

export default function movie(state = {}, action = {}) {
  switch (action.type) {
    case MOVIE_DETAIL_LOAD:
      return {
        ...state,
        loading: true,
      }

    case MOVIE_DETAIL_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload,
      }

    case MOVIE_DETAIL_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
