import {
  SEARCH_LOAD,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAIL,
} from '@/redux/actions/search'

const initialState = {
  loading: false,
  result: [],
  totalResults: 0,
  apiError: '',
}

export default function search(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_LOAD:
      return {
        ...state,
        loading: true,
      }

    case SEARCH_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload.Search,
        totalResults: action.payload.totalResults,
        apiError: action.payload.Error || '',
      }

    case SEARCH_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
