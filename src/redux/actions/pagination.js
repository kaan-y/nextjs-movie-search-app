import axios from '@/utils/axios'
import { BASE_URL } from '@/utils/constant'
import { initializeStore } from '@/redux/store'

import {
  SEARCH_LOAD,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAIL,
} from '@/redux/actions/search'

export const changePage = (page) => (dispatch) => {
  try {
    dispatch({
      type: SEARCH_LOAD,
    })

    const reduxStore = initializeStore()
    const { search } = reduxStore.getState()

    Promise.all([
      axios.get(BASE_URL, {
        params: {
          s: search.searchTerm,
          page: page * 2 - 1, // first 10 set
        },
      }),
      axios.get(BASE_URL, {
        params: {
          s: search.searchTerm,
          page: page * 2, // second 10 set
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
        searchTerm: search.searchTerm,
      })
    })
  } catch (error) {
    dispatch({
      type: SEARCH_LOAD_FAIL,
      error: error.message,
    })
  }
}
