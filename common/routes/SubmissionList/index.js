if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'submissions',
    getComponents (location, cb) {
      require.ensure([
        './containers/SubmissionList',
        './reducer'
      ], (require) => {
        let SubmissionsPage = require('./containers/SubmissionList').default
        let submissionsReducer = require('./reducer').default
        injectAsyncReducer(store, 'submissions', submissionsReducer)
        cb(null, SubmissionsPage)
      })
    }
  }
}
