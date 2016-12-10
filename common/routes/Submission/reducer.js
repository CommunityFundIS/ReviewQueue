import * as types from '../../constants'

const initialState = {
  lastFetched: null,
  isLoading: false,
  error: null,
  event: {
    tite: '',
    description: ''
  },
  contact: {
    name: '',
    phone: '',
    email: ''
  },
  funding: {
    ask: '',
    totalCost: ''
  }
}

export default function currentSubmission (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_SUBMISSION_REQUEST:
      return { ...state,
        isLoading: true,
        error: null}
    case types.LOAD_SUBMISSION_SUCCESS:
      return { ...state,
        event: action.payload.event,
        contact: action.payload.contact,
        funding: action.payload.funding,
        lastFetched: action.meta.lastFetched,
        isLoading: false}
    case types.LOAD_SUBMISSION_FAILURE:
      return { ...state,
        error: action.payload }
    default:
      return state
  }
}

// Example of a co-located selector
export const selectCurrentSubmission = state => state.currentSubmission
