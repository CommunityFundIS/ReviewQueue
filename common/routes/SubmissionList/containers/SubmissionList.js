import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadSubmissions } from '../actions'
import { connect } from 'react-redux'
import Submission from '../components/Submission'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import { selectSubmissions } from '../reducer'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadSubmissions())
}

const mapStateToProps = state => ({
  submissions: selectSubmissions(state)
})

const SubmissionListPage = ({ submissions }) => (
  <div className={css(styles.root)}>
    <Helmet title='Submissions' />
    {submissions.isLoading &&
      <div>
        <h2 className={css(styles.title)}>Loading....</h2>
      </div>}
    {!submissions.isLoading &&
      submissions.data.map((submission, i) => <Submission key={submission.id} submission={submission} />)}
  </div>
)

SubmissionListPage.PropTypes = {
  submissions: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 500
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(SubmissionListPage))
