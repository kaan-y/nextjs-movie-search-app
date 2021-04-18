import axios from '@/utils/axios'
import { BASE_URL } from '@/utils/constant'
export const SEARCH_LOAD = 'SEARCH_LOAD'
export const SEARCH_LOAD_SUCCESS = 'SEARCH_LOAD_SUCCESS'
export const SEARCH_LOAD_FAIL = 'SEARCH_LOAD_FAIL'

export const search = (param) => (dispatch) => {
  try {
    dispatch({
      type: SEARCH_LOAD,
    })

    Promise.all([
      axios.get(BASE_URL, {
        params: {
          s: param,
          page: 1,
        },
      }),
      axios.get(BASE_URL, {
        params: {
          s: param,
          page: 2,
        },
      }),
    ]).then((responses) => {
      let movies = null
      if (responses[0].data.Search) {
        movies = [
          ...(responses[0].data.Search ?? ''),
          ...(responses[1].data.Search ?? ''),
        ] // concat movies
      }

      const response = responses[0].data
      response.Search = movies
      dispatch({
        type: SEARCH_LOAD_SUCCESS,
        payload: response,
        searchTerm: param,
      })
    })
  } catch (error) {
    dispatch({
      type: SEARCH_LOAD_FAIL,
      error: error.message,
    })
  }
}
