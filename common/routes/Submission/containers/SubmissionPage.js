import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadSubmission } from '../actions'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import NotFound from '../../../components/NotFound'
import { selectCurrentSubmission } from '../reducer'

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadSubmission(slug))
}

const mapStateToProps = state => selectCurrentSubmission(state)

const SubmissionPage = ({ event, contact, funding, isLoading, error }) => {
  if (!error) {
    return (
      <div>
        <Helmet title={event.title} />
        {isLoading &&
          <div>
            <h2 className={css(styles.loading)}>Loading....</h2>
          </div>}
        {!isLoading &&
          <div>
            <h2 className={css(styles.title)}>{event.title}</h2>
            <div className={css(styles.contactInfo)}>
              <div className={css(styles.name)}>{contact.name}</div>
              <div>
                <div className={css(styles.email)}>{contact.email}</div>
                <div>{contact.phone}</div>
              </div>
            </div>
            <p className={css(styles.description)}>{event.description}</p>
            <div>
              <h3>Funding</h3>
              <br/>
              <div>
                <span className={css(styles.ask)}><b>Ask amount:</b> {funding.ask}</span>
                <span><b>total cost:</b> {funding.totalCost}</span>
              </div>
            </div>
          </div>}
      </div>
    )
  } else {
    // maybe check for different types of errors and display appropriately
    return <NotFound />
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '1rem 0',
    color: '#555'
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#000'
  },
  loading: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '20px'
  },
  email: {
    marginBottom: '5px'
  },
  ask: {
    marginRight: '20px'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(SubmissionPage))
