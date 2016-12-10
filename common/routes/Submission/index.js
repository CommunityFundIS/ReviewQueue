if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'submissions/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/SubmissionPage',
        './reducer'
      ], (require) => {
        let SubmissionPage = require('./containers/SubmissionPage').default
        let submissionReducer = require('./reducer').default
        injectAsyncReducer(store, 'currentSubmission', submissionReducer)
        cb(null, SubmissionPage)
      })
    }
  }
}
