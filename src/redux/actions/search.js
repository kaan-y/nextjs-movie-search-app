import axios from '@/utils/axios'
import { BASE_URL } from '@/utils/constant'
export const SEARCH_LOAD = 'SEARCH_LOAD'
export const SEARCH_LOAD_SUCCESS = 'SEARCH_LOAD_SUCCESS'
export const SEARCH_LOAD_FAIL = 'SEARCH_LOAD_FAIL'

export const search = (param) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_LOAD,
    })

    const response = await axios.get(BASE_URL, {
      params: {
        s: param,
      },
    })
    dispatch({
      type: SEARCH_LOAD_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: SEARCH_LOAD_FAIL,
      error: error.message,
    })
  }
}
