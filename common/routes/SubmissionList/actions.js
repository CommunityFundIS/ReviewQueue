import { LOAD_SUBMISSIONS_REQUEST, LOAD_SUBMISSIONS_SUCCESS, LOAD_SUBMISSIONS_FAILURE } from '../../constants'

const fakeSubmissions = [
  {id: '1', slug: 'asdf', title: 'The awesome submission'},
  {id: '2', slug: 'fdsa', title: 'Plz accept me plz'}
]

export function loadSubmissions () {
  return (dispatch, getState, { axios }) => {
    dispatch({ type: LOAD_SUBMISSIONS_REQUEST })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: fakeSubmissions })
      }, 600)
    })
    .then(res => {
      dispatch({
        type: LOAD_SUBMISSIONS_SUCCESS,
        payload: res.data,
        meta: {
          lastFetched: Date.now()
        }
      })
    })
    .catch(error => {
      console.error(`Error in reducer that handles ${LOAD_SUBMISSIONS_SUCCESS}: `, error)
      dispatch({
        type: LOAD_SUBMISSIONS_FAILURE,
        payload: error,
        error: true
      })
    })
  }
}
