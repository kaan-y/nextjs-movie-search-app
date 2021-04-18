import axios from '@/utils/axios'
import { BASE_URL } from '@/utils/constant'
import { initializeStore } from '@/redux/store'

import {
  SEARCH_LOAD,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAIL,
} from '@/redux/actions/search'

export const changePage = (page) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_LOAD,
    })

    const reduxStore = initializeStore()
    const { search } = reduxStore.getState()
    const response = await axios.get(BASE_URL, {
      params: {
        s: search.searchTerm,
        page: page,
      },
    })

    dispatch({
      type: SEARCH_LOAD_SUCCESS,
      payload: response.data,
      searchTerm: search.searchTerm,
    })
  } catch (error) {
    dispatch({
      type: SEARCH_LOAD_FAIL,
      error: error.message,
    })
  }
}
