import { LOAD_SUBMISSION_REQUEST, LOAD_SUBMISSION_SUCCESS, LOAD_SUBMISSION_FAILURE } from '../../constants'

const fakeSubmission = {
  contact: {
    name: 'Foo Barsson',
    email: 'foo@bar.is',
    phone: '5812345'
  },
  event: {
    title: 'Fake-ass submission',
    description: `Nulla vitae elit libero, a pharetra augue.
              Maecenas faucibus mollis interdum.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.`
  },
  funding: {
    ask: '50000',
    totalCost: '70000'
  }
}

export function loadSubmission (slug) {
  return (dispatch, getState, { axios }) => {
    // const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_SUBMISSION_REQUEST })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: fakeSubmission })
      }, 600)
    })
      .then(res => {
        dispatch({
          type: LOAD_SUBMISSION_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now()
          }
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_SUBMISSION_SUCCESS}: `, error)
        dispatch({
          type: LOAD_SUBMISSION_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}
