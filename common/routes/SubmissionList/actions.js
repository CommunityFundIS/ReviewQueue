import { LOAD_SUBMISSIONS_REQUEST, LOAD_SUBMISSIONS_SUCCESS, LOAD_SUBMISSIONS_FAILURE } from '../../constants'

export function loadSubmissions () {
  return (dispatch, getState, { axios }) => {
    dispatch({ type: LOAD_SUBMISSIONS_REQUEST })
    return axios.get(`https://17d4kawhlg.execute-api.us-east-1.amazonaws.com/dev/submission`)
      .then(res => {
        console.log(111, res)
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
