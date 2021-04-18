import axios from '@/utils/axios'
import { BASE_URL } from '@/utils/constant'
export const MOVIE_DETAIL_LOAD = 'MOVIE_DETAIL_LOAD'
export const MOVIE_DETAIL_LOAD_SUCCESS = 'MOVIE_DETAIL_LOAD_SUCCESS'
export const MOVIE_DETAIL_LOAD_FAIL = 'MOVIE_DETAIL_LOAD_FAIL'

export const getMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_DETAIL_LOAD,
    })

    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
      },
    })
    dispatch({
      type: MOVIE_DETAIL_LOAD_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: MOVIE_DETAIL_LOAD_FAIL,
      error: error.message,
    })
  }
}
