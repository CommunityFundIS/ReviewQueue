import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import { StyleSheet, css } from 'aphrodite'

const App = ({ children }) => (
  <div className={css(styles.root)}>
    <Helmet title='Community Fund - Submissions' titleTemplate='%s - Community Fund - Submissions' />
    <h1 className={css(styles.title)}>Submissions</h1>
    <Nav />
    <main className={css(styles.main)}>
      {children}
    </main>
    <footer className={css(styles.footer)}>
      Copyright © 2016 <a className={css(styles.footerLink)} href='http://twitter.com/jaredpalmer' target='_blank'>Foo Barson</a>
    </footer>
  </div>
)

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem',
    display: 'flex',
    minHeight: 'calc(100vh - 4rem)',
    flexDirection: 'column'
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 56
  },
  main: {
    flex: '1'
  },
  footer: {
    margin: '0 auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App
